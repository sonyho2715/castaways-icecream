'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface FlavorEntry {
  id?: string
  name: string
  description?: string
  tags: string[]
  soldOut: boolean
  sortOrder: number
}

interface DailyMenu {
  id: string
  date: string
  note?: string
  published: boolean
  flavors: FlavorEntry[]
}

interface CateringInquiry {
  id: string
  name: string
  email: string
  phone?: string
  eventType: string
  eventDate?: string
  guestCount: string
  status: string
  createdAt: string
}

interface CakeOrder {
  id: string
  name: string
  email: string
  phone: string
  pickupDate: string
  size: string
  flavors: string
  dedication?: string
  status: string
  createdAt: string
}

type Tab = 'menu' | 'inquiries' | 'orders'

const TAG_OPTIONS = ['DAIRY_FREE', 'NEW', 'SEASONAL', 'VEGAN', 'FAN_FAVORITE']

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>('menu')

  // Menu state
  const [menuNote, setMenuNote] = useState('')
  const [flavors, setFlavors] = useState<FlavorEntry[]>([])
  const [newFlavorName, setNewFlavorName] = useState('')
  const [newFlavorDesc, setNewFlavorDesc] = useState('')
  const [recentMenus, setRecentMenus] = useState<DailyMenu[]>([])
  const [menuSaving, setMenuSaving] = useState(false)
  const [menuMessage, setMenuMessage] = useState('')

  // Inquiries state
  const [inquiries, setInquiries] = useState<CateringInquiry[]>([])
  const [inquiriesLoading, setInquiriesLoading] = useState(false)

  // Orders state
  const [orders, setOrders] = useState<CakeOrder[]>([])
  const [ordersLoading, setOrdersLoading] = useState(false)

  const loadMenus = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/daily-menu')
      if (res.status === 401) {
        router.push('/admin/login')
        return
      }
      const data = await res.json()
      setRecentMenus(data.menus || [])

      // If there's a menu for today, load it
      const today = new Date().toISOString().split('T')[0]
      const todayMenu = data.menus?.find((m: DailyMenu) =>
        m.date.startsWith(today)
      )
      if (todayMenu) {
        setMenuNote(todayMenu.note || '')
        setFlavors(todayMenu.flavors.map((f: FlavorEntry) => ({
          name: f.name,
          description: f.description || '',
          tags: f.tags || [],
          soldOut: f.soldOut,
          sortOrder: f.sortOrder,
        })))
      }
    } catch (err) {
      console.error('Failed to load menus:', err)
    }
  }, [router])

  useEffect(() => {
    loadMenus()
  }, [loadMenus])

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  // Menu functions
  function addFlavor() {
    if (!newFlavorName.trim()) return
    setFlavors(prev => [...prev, {
      name: newFlavorName.trim(),
      description: newFlavorDesc.trim() || undefined,
      tags: [],
      soldOut: false,
      sortOrder: prev.length,
    }])
    setNewFlavorName('')
    setNewFlavorDesc('')
  }

  function removeFlavor(index: number) {
    setFlavors(prev => prev.filter((_, i) => i !== index))
  }

  function toggleSoldOut(index: number) {
    setFlavors(prev => prev.map((f, i) =>
      i === index ? { ...f, soldOut: !f.soldOut } : f
    ))
  }

  function toggleTag(index: number, tag: string) {
    setFlavors(prev => prev.map((f, i) => {
      if (i !== index) return f
      const hasTag = f.tags.includes(tag)
      return {
        ...f,
        tags: hasTag ? f.tags.filter(t => t !== tag) : [...f.tags, tag],
      }
    }))
  }

  function moveFlavor(index: number, direction: 'up' | 'down') {
    if (direction === 'up' && index === 0) return
    if (direction === 'down' && index === flavors.length - 1) return
    const newIndex = direction === 'up' ? index - 1 : index + 1
    const updated = [...flavors]
    const temp = updated[index]
    updated[index] = updated[newIndex]
    updated[newIndex] = temp
    updated.forEach((f, i) => f.sortOrder = i)
    setFlavors(updated)
  }

  async function publishMenu() {
    setMenuSaving(true)
    setMenuMessage('')
    try {
      const res = await fetch('/api/admin/daily-menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          note: menuNote || undefined,
          flavors: flavors.map((f, i) => ({
            name: f.name,
            description: f.description,
            tags: f.tags,
            soldOut: f.soldOut,
            sortOrder: i,
          })),
        }),
      })

      if (res.ok) {
        setMenuMessage('Menu published successfully!')
        loadMenus()
      } else {
        setMenuMessage('Failed to publish menu.')
      }
    } catch {
      setMenuMessage('Error saving menu.')
    } finally {
      setMenuSaving(false)
    }
  }

  // Inquiries loading
  useEffect(() => {
    if (activeTab === 'inquiries' && inquiries.length === 0) {
      setInquiriesLoading(true)
      fetch('/api/admin/inquiries')
        .then(res => res.json())
        .then(data => setInquiries(data.inquiries || []))
        .catch(() => {})
        .finally(() => setInquiriesLoading(false))
    }
  }, [activeTab, inquiries.length])

  // Orders loading
  useEffect(() => {
    if (activeTab === 'orders' && orders.length === 0) {
      setOrdersLoading(true)
      fetch('/api/admin/orders')
        .then(res => res.json())
        .then(data => setOrders(data.orders || []))
        .catch(() => {})
        .finally(() => setOrdersLoading(false))
    }
  }, [activeTab, orders.length])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5BAED6] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Castaways Admin</h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-8">
            {([
              { key: 'menu' as Tab, label: "Today's Menu" },
              { key: 'inquiries' as Tab, label: 'Catering Inquiries' },
              { key: 'orders' as Tab, label: 'Cake Orders' },
            ]).map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-[#5BAED6] text-[#5BAED6]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* TODAY'S MENU TAB */}
        {activeTab === 'menu' && (
          <div className="space-y-6">
            {/* Special Note */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Note / Promo
              </label>
              <input
                type="text"
                value={menuNote}
                onChange={(e) => setMenuNote(e.target.value)}
                placeholder="e.g. Happy National Ice Cream Month! 15% off 12-5pm"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BAED6] focus:border-transparent text-gray-900"
              />
            </div>

            {/* Current Flavors */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Today&apos;s Flavors ({flavors.length})
              </h2>

              {flavors.length === 0 && (
                <p className="text-gray-400 text-sm mb-4">No flavors added yet. Add some below.</p>
              )}

              <div className="space-y-3">
                {flavors.map((flavor, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 ${
                      flavor.soldOut ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-0.5">
                          <button
                            onClick={() => moveFlavor(index, 'up')}
                            className="text-gray-400 hover:text-gray-600 text-xs leading-none"
                            disabled={index === 0}
                          >
                            &#9650;
                          </button>
                          <button
                            onClick={() => moveFlavor(index, 'down')}
                            className="text-gray-400 hover:text-gray-600 text-xs leading-none"
                            disabled={index === flavors.length - 1}
                          >
                            &#9660;
                          </button>
                        </div>
                        <div>
                          <span className={`font-medium ${flavor.soldOut ? 'line-through text-red-500' : 'text-gray-900'}`}>
                            {flavor.name}
                          </span>
                          {flavor.description && (
                            <span className="text-gray-500 text-sm ml-2">
                              - {flavor.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleSoldOut(index)}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            flavor.soldOut
                              ? 'bg-red-100 text-red-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {flavor.soldOut ? 'SOLD OUT' : 'Available'}
                        </button>
                        <button
                          onClick={() => removeFlavor(index)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {TAG_OPTIONS.map(tag => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(index, tag)}
                          className={`px-2 py-0.5 text-xs rounded-full border transition-colors ${
                            flavor.tags.includes(tag)
                              ? 'bg-[#5BAED6] text-white border-[#5BAED6]'
                              : 'bg-white text-gray-500 border-gray-300 hover:border-[#5BAED6]'
                          }`}
                        >
                          {tag.replace('_', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Flavor */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Add Flavor</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newFlavorName}
                    onChange={(e) => setNewFlavorName(e.target.value)}
                    placeholder="Flavor name"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAED6] focus:border-transparent text-gray-900"
                    onKeyDown={(e) => e.key === 'Enter' && addFlavor()}
                  />
                  <input
                    type="text"
                    value={newFlavorDesc}
                    onChange={(e) => setNewFlavorDesc(e.target.value)}
                    placeholder="Description (optional)"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAED6] focus:border-transparent text-gray-900"
                    onKeyDown={(e) => e.key === 'Enter' && addFlavor()}
                  />
                  <button
                    onClick={addFlavor}
                    className="px-4 py-2 bg-[#5BAED6] text-white rounded-lg text-sm font-medium hover:bg-[#4A9DC5] transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Publish Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={publishMenu}
                disabled={menuSaving || flavors.length === 0}
                className="px-6 py-3 bg-[#5BAED6] text-white rounded-xl font-semibold hover:bg-[#4A9DC5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {menuSaving ? 'Publishing...' : "Publish Today's Menu"}
              </button>
              {menuMessage && (
                <span className={`text-sm ${menuMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {menuMessage}
                </span>
              )}
            </div>

            {/* Recent Menus */}
            {recentMenus.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Menus</h2>
                <div className="space-y-3">
                  {recentMenus.map(menu => (
                    <div key={menu.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {new Date(menu.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="text-xs text-gray-500">
                          {menu.flavors.length} flavors
                        </span>
                      </div>
                      {menu.note && (
                        <p className="text-xs text-gray-500 mb-1">{menu.note}</p>
                      )}
                      <p className="text-xs text-gray-400">
                        {menu.flavors.map(f => f.name).join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* INQUIRIES TAB */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Catering Inquiries</h2>
            </div>
            {inquiriesLoading ? (
              <div className="p-8 text-center text-gray-400">Loading...</div>
            ) : inquiries.length === 0 ? (
              <div className="p-8 text-center text-gray-400">No inquiries yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Date</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Email</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Event</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Guests</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {inquiries.map(inq => (
                      <tr key={inq.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-500">
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900">{inq.name}</td>
                        <td className="px-4 py-3 text-gray-500">{inq.email}</td>
                        <td className="px-4 py-3 text-gray-500 capitalize">{inq.eventType}</td>
                        <td className="px-4 py-3 text-gray-500">{inq.guestCount}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            inq.status === 'new' ? 'bg-blue-100 text-blue-700' :
                            inq.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' :
                            inq.status === 'booked' ? 'bg-green-100 text-green-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {inq.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Cake Orders</h2>
            </div>
            {ordersLoading ? (
              <div className="p-8 text-center text-gray-400">Loading...</div>
            ) : orders.length === 0 ? (
              <div className="p-8 text-center text-gray-400">No orders yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Date</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Phone</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Pickup</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Size</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Flavors</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orders.map(order => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-500">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900">{order.name}</td>
                        <td className="px-4 py-3 text-gray-500">{order.phone}</td>
                        <td className="px-4 py-3 text-gray-500">
                          {new Date(order.pickupDate).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-gray-500">{order.size}</td>
                        <td className="px-4 py-3 text-gray-500 max-w-[200px] truncate">
                          {order.flavors}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            order.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            order.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

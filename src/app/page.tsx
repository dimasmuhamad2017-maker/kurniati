'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Package, 
  Truck, 
  Shield, 
  Users,
  Clock,
  CheckCircle,
  Star,
  Egg,
  ShoppingCart
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('products')

  const products = [
    {
      name: 'Telur Ayam Kampung',
      description: 'Telur segar langsung dari peternakan tradisional',
      price: 'Hubungi untuk harga grosir',
      icon: <Egg className="w-8 h-8" />,
      features: ['Kualitas premium', 'Kandungan gizi tinggi', 'Tanpa pengawet']
    },
    {
      name: 'Telur Ayam Negeri',
      description: 'Telur produksi peternakan modern berkualitas',
      price: 'Hubungi untuk harga grosir',
      icon: <Egg className="w-8 h-8" />,
      features: ['Produksi stabil', 'Kualitas konsisten', 'Harga kompetitif']
    },
    {
      name: 'Telur Olahan',
      description: 'Berbagai produk olahan telur berkualitas',
      price: 'Hubungi untuk harga grosir',
      icon: <Package className="w-8 h-8" />,
      features: ['Shelf life lebih lama', 'Praktis', 'Kemasan higienis']
    }
  ]

  const services = [
    {
      title: 'Pengiriman Terpercaya',
      description: 'Distribusi tepat waktu ke seluruh wilayah',
      icon: <Truck className="w-12 h-12 text-yellow-600" />
    },
    {
      title: 'Kualitas Terjamin',
      description: 'Produk segar dan berkualitas tinggi',
      icon: <Shield className="w-12 h-12 text-yellow-600" />
    },
    {
      title: 'Layanan 24/7',
      description: 'Siap melayani kebutuhan Anda kapan saja',
      icon: <Clock className="w-12 h-12 text-yellow-600" />
    },
    {
      title: 'Tim Profesional',
      description: 'Staf berpengalaman dan ramah',
      icon: <Users className="w-12 h-12 text-yellow-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="KURNIATI Logo" className="w-12 h-12 rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">KURNIATI</h1>
                <p className="text-sm text-gray-600">Perdagangan Besar Telur & Hasil Olahan</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#beranda" className="text-gray-700 hover:text-yellow-600 transition">Beranda</a>
              <a href="#produk" className="text-gray-700 hover:text-yellow-600 transition">Produk</a>
              <a href="#layanan" className="text-gray-700 hover:text-yellow-600 transition">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-yellow-600 transition">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-yellow-600 transition">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-yellow-600 transition">Terms</a>
            </nav>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 text-sm px-4 py-2">
            Supplier Telur Terpercaya Sejak 2020
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            KURNIATI
            <span className="block text-3xl md:text-4xl text-yellow-600 mt-2">
              Partner Distribusi Telur Terbaik Anda
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Menyediakan telur segar berkualitas tinggi dan hasil olahan telur untuk kebutuhan 
            perdagangan besar Anda. Distribusi tepat waktu, harga kompetitif, dan kualitas terjamin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8">
              Lihat Katalog
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-yellow-100">Pelanggan Setia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-yellow-100">Telur Terjual/Hari</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-yellow-100">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-yellow-100">Layanan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Produk Unggulan KURNIATI</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Menyediakan berbagai jenis telur dan produk olahan berkualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-yellow-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-lg font-semibold text-yellow-600 mb-3">{product.price}</div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      Pesan Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih KURNIATI?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik untuk kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 bg-yellow-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Hubungi KURNIATI</h3>
              <p className="text-xl text-yellow-100">
                Siap melayani kebutuhan telur dan hasil olahan untuk bisnis Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Alamat</p>
                      <p className="text-gray-600">LIO, Desa/Kelurahan Bojong Pondok Terong, Kec. Cipayung, Kota Depok, Provinsi Jawa Barat</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-gray-600">085285704297</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@kurniati.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Jam Operasional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senin - Jumat</span>
                    <span className="font-semibold text-gray-900">06:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sabtu</span>
                    <span className="font-semibold text-gray-900">06:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minggu</span>
                    <span className="font-semibold text-gray-900">07:00 - 18:00</span>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Buka 24 Jam untuk Pesanan Besar
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="KURNIATI Logo" className="w-10 h-10 rounded-lg" />
                <h4 className="text-xl font-bold">KURNIATI</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Perdagangan Besar Telur Dan Hasil Olahan Telur Terpercaya
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Telur Segar</a></li>
                <li><a href="#" className="hover:text-white transition">Telur Olahan</a></li>
                <li><a href="#" className="hover:text-white transition">Distribusi</a></li>
                <li><a href="#" className="hover:text-white transition">Konsultasi</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Perusahaan</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Hubungi Kami</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>085285704297</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@kurniati.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Depok, Jawa Barat</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 KURNIATI. All rights reserved. | Perdagangan Besar Telur Dan Hasil Olahan Telur</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
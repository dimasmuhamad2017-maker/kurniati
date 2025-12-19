'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, ArrowLeft, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img src="/logo.png" alt="KURNIATI Logo" className="w-10 h-10 rounded-lg" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">KURNIATI</h1>
                <p className="text-xs text-gray-600">Privacy Policy</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-yellow-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi KURNIATI
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kebijakan privasi ini menjelaskan bagaimana KURNIATI mengumpulkan, 
              menggunakan, dan melindungi informasi pribadi Anda.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <Eye className="w-5 h-5 text-yellow-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Selamat datang di KURNIATI. Kami menghargai privasi Anda dan berkomitmen 
                  untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan 
                  privasi ini berlaku untuk semua layanan yang kami sediakan, termasuk website 
                  dan layanan perdagangan telur kami.
                </p>
                <p>
                  Dengan menggunakan layanan KURNIATI, Anda menyetujui pengumpulan dan 
                  penggunaan informasi sesuai dengan kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <Database className="w-5 h-5 text-yellow-600" />
                  <span>Informasi yang Kami Kumpulkan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Informasi Pribadi</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat email</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi bisnis (untuk pelanggan grosir)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Informasi Transaksi</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Riwayat pesanan</li>
                    <li>Detail pembayaran</li>
                    <li>Preferensi produk</li>
                    <li>Frekuensi pembelian</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Informasi Teknis</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Waktu akses</li>
                    <li>Cookie dan data tracking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <UserCheck className="w-5 h-5 text-yellow-600" />
                  <span>Penggunaan Informasi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Memproses pesanan:</strong> Menangani transaksi dan pengiriman produk telur</li>
                  <li><strong>Layanan pelanggan:</strong> Merespons pertanyaan dan memberikan dukungan</li>
                  <li><strong>Personalisasi:</strong> Menyesuaikan pengalaman berbelanja Anda</li>
                  <li><strong>Komunikasi:</strong> Mengirim informasi produk dan penawaran khusus</li>
                  <li><strong>Penyempurnaan layanan:</strong> Menganalisis data untuk meningkatkan kualitas layanan</li>
                  <li><strong>Keamanan:</strong> Melindungi dari penipuan dan aktivitas ilegal</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <Lock className="w-5 h-5 text-yellow-600" />
                  <span>Keamanan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  KURNIATI berkomitmen untuk melindungi informasi pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas untuk staf yang berwenang</li>
                  <li>Sistem keamanan berlapis untuk mencegah akses tidak sah</li>
                  <li>Backup data teratur untuk mencegah kehilangan informasi</li>
                  <li>Audit keamanan berkala</li>
                </ul>
                <p className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg">
                  <strong>Perhatian:</strong> Meskipun kami telah menerapkan langkah-langkah keamanan yang 
                  ketat, tidak ada sistem yang 100% aman. Kami terus meningkatkan keamanan kami 
                  untuk melindungi data Anda.
                </p>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Berbagi Informasi dengan Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  KURNIATI tidak menjual, menyewakan, atau membagikan informasi pribadi Anda 
                  kepada pihak ketiga untuk tujuan pemasaran, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Penyedia layanan:</strong> Mitra yang membantu operasional bisnis kami</li>
                  <li><strong>Otoritas hukum:</strong> Saat diwajibkan oleh undang-undang</li>
                  <li><strong>Transfer bisnis:</strong> Dalam kasus merger atau akuisisi</li>
                  <li><strong>Perlindungan:</strong> Untuk melindungi hak, privasi, atau keselamatan kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Hak Anda sebagai Pengguna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Sebagai pengguna layanan KURNIATI, Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Mengakses:</strong> Memeriksa informasi pribadi yang kami simpan</li>
                  <li><strong>Memperbaiki:</strong> Memperbarui informasi yang tidak akurat</li>
                  <li><strong>Menghapus:</strong> Meminta penghapusan data pribadi (dengan pengecualian tertentu)</li>
                  <li><strong>Menolak:</strong> Menolak pemasaran langsung dari kami</li>
                  <li><strong>Portabilitas:</strong> Meminta transfer data ke pihak lain</li>
                </ul>
                <p>
                  Untuk menggunakan hak ini, silakan hubungi kami melalui informasi kontak yang tersedia.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Kebijakan Cookie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Website KURNIATI menggunakan cookie untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookie esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookie performa:</strong> Mengumpulkan data anonim untuk analisis</li>
                  <li><strong>Cookie fungsional:</strong> Mengingat preferensi pengguna</li>
                  <li><strong>Cookie pemasaran:</strong> Untuk iklan yang relevan</li>
                </ul>
                <p>
                  Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Perubahan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  KURNIATI dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                  Perubahan signifikan akan diinformasikan melalui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pemberitahuan di website kami</li>
                  <li>Email ke pelanggan terdaftar</li>
                  <li>Pemberitahuan langsung untuk transaksi berikutnya</li>
                </ul>
                <p>
                  Penggunaan layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-gray-900">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi KURNIATI atau 
                  ingin menggunakan hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="bg-white p-4 rounded-lg space-y-2">
                  <p><strong>Perusahaan:</strong> KURNIATI</p>
                  <p><strong>Alamat:</strong> LIO, Desa/Kelurahan Bojong Pondok Terong, Kec. Cipayung, Kota Depok, Provinsi Jawa Barat</p>
                  <p><strong>Telepon:</strong> 085285704297</p>
                  <p><strong>Email:</strong> privacy@kurniati.com</p>
                </div>
                <p className="text-sm text-gray-600">
                  Kami akan merespons pertanyaan Anda dalam waktu 2x24 jam pada hari kerja.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6">
                  Kembali ke Beranda
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-6">
                  Lihat Syarat & Ketentuan
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 KURNIATI - Perdagangan Besar Telur Dan Hasil Olahan Telur
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
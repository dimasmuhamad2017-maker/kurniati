'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ArrowLeft, CheckCircle, AlertCircle, Scale, Users } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
                <p className="text-xs text-gray-600">Syarat & Ketentuan</p>
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
              <FileText className="w-10 h-10 text-yellow-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan KURNIATI
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan perdagangan telur 
              dan hasil olahan telur yang disediakan oleh KURNIATI.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span>Penerimaan Syarat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Dengan mengakses dan menggunakan layanan KURNIATI, Anda menyatakan bahwa 
                  Anda telah membaca, memahami, dan menyetujui untuk terikat oleh syarat dan 
                  ketentuan ini.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Perhatian:</strong> Jika Anda tidak menyetujui syarat dan ketentuan ini, 
                    jangan menggunakan layanan yang kami sediakan.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <Users className="w-5 h-5 text-yellow-600" />
                  <span>Informasi Perusahaan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Nama Perusahaan:</strong> KURNIATI</p>
                      <p><strong>Jenis Usaha:</strong> Perdagangan Besar Telur Dan Hasil Olahan Telur</p>
                      <p><strong>Alamat:</strong> LIO, Desa/Kelurahan Bojong Pondok Terong, Kec. Cipayung, Kota Depok, Provinsi Jawa Barat</p>
                    </div>
                    <div>
                      <p><strong>Telepon:</strong> 085285704297</p>
                      <p><strong>Email:</strong> info@kurniati.com</p>
                      <p><strong>NPWP:</strong> [Nomor NPWP Perusahaan]</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Layanan yang Ditawarkan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  KURNIATI menyediakan layanan perdagangan besar untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Telur Ayam Kampung:</strong> Telur segar dari peternakan tradisional</li>
                  <li><strong>Telur Ayam Negeri:</strong> Telur produksi peternakan modern</li>
                  <li><strong>Telur Olahan:</strong> Berbagai produk olahan telur dengan kemasan higienis</li>
                  <li><strong>Distribusi:</strong> Pengiriman ke seluruh wilayah Jabodetabek dan sekitarnya</li>
                  <li><strong>Konsultasi:</strong> Layanan konsultasi untuk kebutuhan telur bisnis Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ordering Process */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Proses Pemesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">1. Pemesanan</h4>
                  <p>Pemesanan dapat dilakukan melalui:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Telepon: 085285704297</li>
                    <li>WhatsApp: 085285704297</li>
                    <li>Email: info@kurniati.com</li>
                    <li>Website resmi KURNIATI</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Konfirmasi</h4>
                  <p>
                    Setiap pemesanan akan dikonfirmasi oleh tim kami melalui telepon atau WhatsApp. 
                    Konfirmasi mencakup:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Jenis dan jumlah produk</li>
                    <li>Harga total</li>
                    <li>Waktu pengiriman</li>
                    <li>Alamat pengiriman</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Pembayaran</h4>
                  <p>Metode pembayaran yang tersedia:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Transfer Bank (BCA, Mandiri, BNI)</li>
                    <li>Tunai (COD untuk wilayah tertentu)</li>
                    <li>Transfer Digital (GoPay, OVO, Dana)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Pricing and Payment */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Harga dan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Struktur Harga</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Harga berlaku untuk pembelian grosir (minimum order)</li>
                    <li>Harga dapat berubah sesuai kondisi pasar</li>
                    <li>Diskon khusus untuk pelanggan tetap</li>
                    <li>Harga belum termasuk biaya pengiriman</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Syarat Pembayaran</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pembayaran lunas sebelum pengiriman untuk pelanggan baru</li>
                    <li>Kredit tersedia untuk pelanggan terverifikasi (syarat & ketentuan berlaku)</li>
                    <li>Batas waktu pembayaran: 24 jam setelah konfirmasi order</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Informasi:</strong> Harga yang tercantum adalah harga grosir. 
                    Untuk informasi harga terbaru, silakan hubungi tim sales kami.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Terms */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Ketentuan Pengiriman</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Wilayah Pengiriman</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Jabodetabek: Same day delivery (order sebelum jam 10:00)</li>
                    <li>Jawa Barat: 1-2 hari kerja</li>
                    <li>Luar Jabodetabek: Koordinasi lebih lanjut</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Jadwal Pengiriman</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Senin - Sabtu: 06:00 - 18:00</li>
                    <li>Minggu: 07:00 - 15:00</li>
                    <li>Hari libur: Terbatas, konfirmasi terlebih dahulu</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Biaya Pengiriman</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Gratis ongkir untuk minimum order tertentu</li>
                    <li>Biaya berdasarkan jarak dan volume</li>
                    <li>Kalkulasi biaya akan diinformasikan saat konfirmasi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quality Guarantee */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Jaminan Kualitas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  KURNIATI berkomitmen menyediakan produk berkualitas tinggi dengan jaminan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Kesegaran:</strong> Telur segar dengan umur maksimal 7 hari sejak produksi</li>
                  <li><strong>Kualitas:</strong> Tidak ada telur pecah atau rusak</li>
                  <li><strong>Kebersihan:</strong> Kemasan higienis dan bersih</li>
                  <li><strong>Keaslian:</strong> Produk asli tanpa campuran</li>
                </ul>

                <div>
                  <h4 className="font-semibold mb-2">Kebijakan Pengembalian</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pengembalian diterima dalam 24 jam setelah pengiriman</li>
                    <li>Produk rusak akan diganti 100%</li>
                    <li>Klaim harus disertai bukti foto/video</li>
                    <li>Biaya pengembalian ditanggung KURNIATI untuk produk rusak</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Tanggung Jawab Pengguna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Sebagai pelanggan, Anda bertanggung jawab untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memastikan alamat pengiriman benar dan dapat diakses</li>
                  <li>Melakukan pembayaran tepat waktu</li>
                  <li>Memeriksa kondisi produk saat diterima</li>
                  <li>Menyimpan produk dengan cara yang benar</li>
                  <li>Memberikan feedback untuk peningkatan layanan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <span>Batasan Tanggung Jawab</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  KURNIATI tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keterlambatan pengiriman akibat force majeure (bencana alam, kerusuhan, dll)</li>
                  <li>Kerusakan produk akibat penanganan yang salah setelah diterima</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                  <li>Kesalahan informasi dari pihak ketiga</li>
                </ul>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Maksimal tanggung jawab KURNIATI adalah sebesar nilai transaksi 
                    yang bersangkutan.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <Scale className="w-5 h-5 text-yellow-600" />
                  <span>Hak Kekayaan Intelektual</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Semua konten di website dan materi promosi KURNIATI dilindungi oleh 
                  hak cekayaan intelektual:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nama "KURNIATI" adalah merek dagang terdaftar</li>
                  <li>Logo dan desain visual adalah hak cipta KURNIATI</li>
                  <li>Foto produk adalah milik KURNIATI</li>
                  <li>Dilarang menggunakan materi tanpa izin tertulis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Penyelesaian Sengketa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Untuk penyelesaian sengketa yang mungkin timbul:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Negosiasi:</strong> Upaya penyelesaian secara musyawarah</li>
                  <li><strong>Mediasi:</strong> Melalui pihak ketiga yang netral</li>
                  <li><strong>Arbitrase:</strong> Badan Arbitrase Nasional Indonesia (BANI)</li>
                  <li><strong>Pengadilan:</strong> Pengadilan Negeri Kota Depok</li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Rekomendasi:</strong> Kami selalu berusaha menyelesaikan setiap 
                    masalah secara damai dan kekeluargaan untuk menjaga hubungan bisnis yang baik.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Pengakhiran Layanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  KURNIATI berhak menghentikan layanan jika:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pelanggan melanggar syarat dan ketentuan</li>
                  <li>Pelanggan terlibat aktivitas ilegal</li>
                  <li>Terjadi pemalsuan informasi</li>
                  <li>Pelanggan tidak melakukan pembayaran</li>
                </ul>

                <p>
                  Pelanggan juga berhak menghentikan kerjasama kapan saja dengan 
                  memberikan pemberitahuan 7 hari kerja.
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
                  Untuk pertanyaan tentang syarat dan ketentuan KURNIATI, silakan hubungi:
                </p>
                <div className="bg-white p-4 rounded-lg space-y-2">
                  <p><strong>Perusahaan:</strong> KURNIATI</p>
                  <p><strong>Alamat:</strong> LIO, Desa/Kelurahan Bojong Pondok Terong, Kec. Cipayung, Kota Depok, Provinsi Jawa Barat</p>
                  <p><strong>Telepon:</strong> 085285704297</p>
                  <p><strong>Email:</strong> legal@kurniati.com</p>
                  <p><strong>Website:</strong> www.kurniati.com</p>
                </div>
                <p className="text-sm text-gray-600">
                  Jam operasional: Senin - Sabtu, 06:00 - 22:00 WIB
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
              <Link href="/privacy">
                <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-6">
                  Lihat Kebijakan Privasi
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
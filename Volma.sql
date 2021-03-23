-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 23 Mar 2021 pada 02.41
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Volma`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(10) UNSIGNED NOT NULL,
  `id_mhs` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `id_mhs`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(2, 2, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(3, 3, '2021-03-23 08:36:00', '2021-03-23 08:36:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kandidat`
--

CREATE TABLE `kandidat` (
  `id_kandidat` int(10) UNSIGNED NOT NULL,
  `id_ketua` int(10) UNSIGNED DEFAULT NULL,
  `id_wakil` int(10) UNSIGNED DEFAULT NULL,
  `no_urut` int(11) DEFAULT NULL,
  `visi` varchar(255) DEFAULT NULL,
  `misi` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `kandidat`
--

INSERT INTO `kandidat` (`id_kandidat`, `id_ketua`, `id_wakil`, `no_urut`, `visi`, `misi`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, 'Visinya paslon no urut satu', 'Misinya paslon no urut satu', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(2, 3, 4, 2, 'Visinya paslon no urut dua', 'Misinya paslon no urut dua', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(3, 5, 6, 3, 'Visinya paslon no urut tiga', 'Misinya paslon no urut tiga', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(4, 7, 8, 4, 'Visinya paslon no urut empat', 'Misinya paslon no urut empat', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(5, 9, 10, 5, 'Visinya paslon no urut lima', 'Misinya paslon no urut lima', '2021-03-23 08:36:00', '2021-03-23 08:36:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(11, '20210316082430_mahasiswa.js', 1, '2021-03-23 01:35:51'),
(12, '20210316082539_kandidat.js', 1, '2021-03-23 01:35:51'),
(13, '20210316082749_admin.js', 1, '2021-03-23 01:35:51'),
(14, '20210316083448_pemilih.js', 1, '2021-03-23 01:35:51'),
(15, '20210316140332_vote.js', 1, '2021-03-23 01:35:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id_mhs` int(10) UNSIGNED NOT NULL,
  `nim` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `jurusan` varchar(255) DEFAULT NULL,
  `angkatan` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `mahasiswa`
--

INSERT INTO `mahasiswa` (`id_mhs`, `nim`, `nama`, `jurusan`, `angkatan`, `created_at`, `updated_at`) VALUES
(1, '1301180097', 'Deri Indrawan', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(2, '1301184369', 'Ananta Ihza Ramadhan', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(3, '1301180432', 'Muhammad Salman Farhan', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(4, '1301184026', 'Ihsan Ahsanu Amala', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(5, '1301184008', 'Faiza Aulia Rahma Putra', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(6, '1301180032', 'Andi', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(7, '1301184302', 'Joko', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(8, '1301184493', 'Joni', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(9, '1301180021', 'Jeki', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(10, '130118444', 'Lina', 'S1 Informatika', '2018', '2021-03-23 08:36:00', '2021-03-23 08:36:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemilih`
--

CREATE TABLE `pemilih` (
  `id_pemilih` int(10) UNSIGNED NOT NULL,
  `id_mhs` int(10) UNSIGNED DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `pemilih`
--

INSERT INTO `pemilih` (`id_pemilih`, `id_mhs`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, '1234', 0, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(2, 2, '1234', 0, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(3, 3, '1234', 0, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(4, 4, '1234', 0, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(5, 5, '1234', 1, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(6, 6, '1234', 1, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(7, 7, '1234', 1, '2021-03-23 08:36:00', '2021-03-23 08:36:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `vote`
--

CREATE TABLE `vote` (
  `id_vote` int(10) UNSIGNED NOT NULL,
  `id_pemilih` int(10) UNSIGNED DEFAULT NULL,
  `id_kandidat` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `vote`
--

INSERT INTO `vote` (`id_vote`, `id_pemilih`, `id_kandidat`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(2, 2, 1, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(3, 3, 1, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(4, 4, 2, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(5, 5, 2, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(6, 6, 3, '2021-03-23 08:36:00', '2021-03-23 08:36:00'),
(7, 7, 3, '2021-03-23 08:36:00', '2021-03-23 08:36:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`),
  ADD KEY `admin_id_mhs_foreign` (`id_mhs`);

--
-- Indeks untuk tabel `kandidat`
--
ALTER TABLE `kandidat`
  ADD PRIMARY KEY (`id_kandidat`),
  ADD KEY `kandidat_id_ketua_foreign` (`id_ketua`),
  ADD KEY `kandidat_id_wakil_foreign` (`id_wakil`);

--
-- Indeks untuk tabel `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indeks untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id_mhs`);

--
-- Indeks untuk tabel `pemilih`
--
ALTER TABLE `pemilih`
  ADD PRIMARY KEY (`id_pemilih`),
  ADD KEY `pemilih_id_mhs_foreign` (`id_mhs`);

--
-- Indeks untuk tabel `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`id_vote`),
  ADD KEY `vote_id_pemilih_foreign` (`id_pemilih`),
  ADD KEY `vote_id_kandidat_foreign` (`id_kandidat`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `kandidat`
--
ALTER TABLE `kandidat`
  MODIFY `id_kandidat` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id_mhs` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `pemilih`
--
ALTER TABLE `pemilih`
  MODIFY `id_pemilih` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `vote`
--
ALTER TABLE `vote`
  MODIFY `id_vote` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_id_mhs_foreign` FOREIGN KEY (`id_mhs`) REFERENCES `mahasiswa` (`id_mhs`);

--
-- Ketidakleluasaan untuk tabel `kandidat`
--
ALTER TABLE `kandidat`
  ADD CONSTRAINT `kandidat_id_ketua_foreign` FOREIGN KEY (`id_ketua`) REFERENCES `mahasiswa` (`id_mhs`),
  ADD CONSTRAINT `kandidat_id_wakil_foreign` FOREIGN KEY (`id_wakil`) REFERENCES `mahasiswa` (`id_mhs`);

--
-- Ketidakleluasaan untuk tabel `pemilih`
--
ALTER TABLE `pemilih`
  ADD CONSTRAINT `pemilih_id_mhs_foreign` FOREIGN KEY (`id_mhs`) REFERENCES `mahasiswa` (`id_mhs`);

--
-- Ketidakleluasaan untuk tabel `vote`
--
ALTER TABLE `vote`
  ADD CONSTRAINT `vote_id_kandidat_foreign` FOREIGN KEY (`id_kandidat`) REFERENCES `kandidat` (`id_kandidat`),
  ADD CONSTRAINT `vote_id_pemilih_foreign` FOREIGN KEY (`id_pemilih`) REFERENCES `pemilih` (`id_pemilih`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

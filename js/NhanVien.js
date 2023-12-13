function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLamTrongThang) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLamTrongThang = _gioLamTrongThang;
    this.tl = 0;
    this.xl = "";

    this.tongLuong = function () {
        if (this.chucVu === "Sếp") {
            this.tl = Number(this.luongCoBan) * 3;
        } else if (this.chucVu === "Trưởng phòng") {
            this.tl = Number(this.luongCoBan) * 2;
        } else if (this.chucVu === "Nhân viên") {
            this.tl = Number(this.luongCoBan) * 1;
        }
    }

    this.xeploai = function () {
        if (this.chucVu === "Nhân viên" && this.gioLamTrongThang >= 192) {
            this.xl = "xuất sắc";
        } else if ((this.chucVu === "Nhân viên" && this.gioLamTrongThang >= 176) && (this.chucVu === "Nhân viên" && this.gioLamTrongThang < 192)) {
            this.xl = "Giỏi";
        } else if ((this.chucVu === "Nhân viên" && this.gioLamTrongThang >= 160) && (this.chucVu === "Nhân viên" && this.gioLamTrongThang < 176)) {
            this.xl = "Khá";
        } else if (this.chucVu === "Nhân viên" && this.gioLamTrongThang < 160) {
            this.xl = "Trung Bình";
        } 
    }


}
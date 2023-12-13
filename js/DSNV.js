function DSNV() {
    this.arr = [];

    // Thêm nhân viên vào mảng
    this.themNV = function (nv) {
        this.arr.push(nv);
    };

    // Tìm nhân viên trong mảng
    this.timViTriNV = function (id) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            const nv = this.arr[i];
            if (nv.taiKhoan === id) {
                index = i;
                break;
            }
        }
        return index;
    };

    // Xóa nhân viên trong mảng
    this.xoaNV = function (id) {
        const index = this.timViTriNV(id);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    // Lấy thông tin nhân viên từ mảng
    this.layThongTinNV = function (id) {
        const index = this.timViTriNV(id);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    // Cập nhật thông tin nhân viên trong mảng
    this.capNhatNV = function (nv) {
        /*
        Giải thuật 
        0. Tìm index
        1. Nếu index khác -1
            1.1 Tìm thấy
            1.2 Cập nhật nv vào arr thứ index
        */
        const index = this.timViTriNV(nv.taiKhoan);
        if (index !== -1) {
            this.arr[index] = nv;
        }

    };

    // Tìm kiếm nhân viên
    this.timKiemNV = function (keyword) {
        /*
        Giải thuật 
        0. Tạo 1 mảng mới "mangTimKiem" chứa các nhân viên có tên là "Nguyen Van"
        1. Duyệt mảng arr
            1.1. Lấy ra nv đang duyệt : nv= arr[i]
            1.2.1 Chuyển keyword về chữ thường
            1.2.2 Chuyển tên nv về chữ thường
            1.2.3 So sánh keyword với nv.xepLoai 
            1.3. Nếu có chứa => push nv vào mangTimKiem
        2. Trả về mangTimKiem
        */
                var mangTimKiem = [];
                for (var i = 0; i < this.arr.length; i++) {
                    const nv = this.arr[i];
                    // Chuyển keyword về chữ thường
                    const keywordLower = keyword.toLowerCase();
        
                    // Chuyển nv.xepLoai về chữ thường
                    const xepLoaiNVLower = nv.xl.toLowerCase();
        
                    // So sánh tenSVLower có chứa  keywordLower 
                    const indexLower = xepLoaiNVLower.indexOf(keywordLower)
        
                    if(indexLower !== -1) {
                        mangTimKiem.push(nv);
                    }
                }
                return mangTimKiem;
            };



}
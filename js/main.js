const dsnv = new DSNV();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNV() {
    const _taiKhoan = getEle("tknv").value;
    const _hoTen = getEle("name").value;
    const _email = getEle("email").value;
    const _matKhau = getEle("password").value;
    const _ngayLam = getEle("datepicker").value;
    const _luongCoBan = getEle("luongCB").value;
    const _chucVu = getEle("chucvu").value;
    const _gioLamTrongThang = getEle("gioLam").value;

    // Tạo đối tượng nhân viên từ lớp đối tượng NhanVien

    const nv = new NhanVien(
        _taiKhoan,
        _hoTen,
        _email,
        _matKhau,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLamTrongThang
    );

    // gọi method tinh tổng lương
    nv.tongLuong();
    nv.xeploai();

    return nv;
}

function renderUI(data) {
    var content = "";

    for (var i = 0; i < data.length; i++) {
        const nv = data[i];
        content += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tl}</td>
            <td>${nv.xl}</td>
            <td>
                <button class="btn btn-info" id="btnEdit" data-toggle="modal" data-target="#myModal" onclick="handleEdit('${nv.taiKhoan}')">Edit</button>
                <button class="btn btn-danger" onclick="handleDelete('${nv.taiKhoan}')">delete</button>
            </td>
        </tr>
         `;
    }
    getEle("tableDanhSach").innerHTML = content;
}

// Thêm nhân viên
function handleThemNV() {
    // Lấy thông tin nhân viên
    const nv = layThongTinNV();
    // Log ra console thử cái
    console.log(nv);
    // Thêm nhân viên vô mảng 
    dsnv.themNV(nv);

    // Show thông tin nhân viên
    renderUI(dsnv.arr);

    // lưu data xuống localStorage
    setLocalStorage();
}

// Xóa nhân viên
function handleDelete(id) {
    // xóa sv
    dsnv.xoaNV(id);
    // render lại tbody
    renderUI(dsnv.arr);
    // lưu data xuống localStorage
    setLocalStorage();
}

// Edit nhân viên
function handleEdit(id) {
    const nv = dsnv.layThongTinNV(id);
    if (nv !== null) {
        // DOM tới các thẻ input, gán value từ nv
        getEle("tknv").value = nv.taiKhoan;
        // disabled tài khoản nhân viên, không được sửa
        getEle("tknv").disabled = true;

        getEle("name").value = nv.hoTen;
        getEle("email").value = nv.email;
        getEle("password").value = nv.matKhau;
        getEle("datepicker").value = nv.ngayLam;
        getEle("luongCB").value = nv.luongCoBan;
        getEle("chucvu").value = nv.chucVu;
        getEle("gioLam").value = nv.gioLamTrongThang;

        //display block #btnUpdate
        getEle("btnCapNhat").style.display = "inline-block";

        // none #btnAdd
        getEle("btnThemNV").style.display = "none";

    }

    // // render lại tbody
    // renderUI(dssv.arr);
    // // lưu data xuống localStorage
    // setLocalStorage();
}

// Cập nhật nhân viên
function handleCapNhatNV() {
    const nv = layThongTinNV(false);
    dsnv.capNhatNV(nv);
    //render lại tbody
    renderUI(dsnv.arr);
    //lưu data xuống localStorage
    setLocalStorage();
}

// Tìm kiếm nhân viên theo xếp loại
getEle("searchName").addEventListener("keyup", function () {
    const keyword = getEle("searchName").value;

    // tìm kiếm nv
    const mangTimKiem = dsnv.timKiemNV(keyword);
    //render lai tbody
    renderUI(mangTimKiem);
})

// Lưu dữ liệu xuống localStorage
function setLocalStorage () {
    // convert data từ JSON = String
    const dataString = JSON.stringify(dsnv.arr);
    // Lưu data xuống localStorage
    localStorage.setItem("DSNV", dataString);
}

// Lấy dữ liệu từ localStorage
function getLocalStorage() {
    const dataString = localStorage.getItem("DSNV");

    if (dataString) {
       // convert ngược lại từ string => JSON
       const dataJson = JSON.parse(dataString);
       // Phục hồi data cho dsnv.arr
       dsnv.arr = dataJson;
       // render lại UI
       renderUI(dsnv.arr);

    }
}

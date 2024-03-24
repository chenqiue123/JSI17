SQL: là một hệ quản trị csdl, là một ngôn ngữ truỳ vấn dl có quan hệ, dựa trên mô hình bàng và qhe giữa các bảng.
NoSQL: Là một loại csdl ko sử dụng ngôn ngữ truy vấn dữ liệu có cấu trúc như SQL mà nó sử dụng mô hình dữ kiệu: Cột, tài liệu, đồ thị hoặc khoá - giá trị. 

Firebase Database:

- Firestore db : phiên bản mới hơn và cải tiến hơn từ Realtime db vs mô hình mới và trực quan hơn. Lưu dữ liệu trong các tài liệu chứa các trường đc ánh xạ vào các giá trị. Các tài liệu đc lưu trữ trg các tập hợp, có thể sdung để tổ chức dữ liệu và truy vấn dữ liệu.


- Realtime database: Lưu dữ liệu dưới dạng JSON và truy vấn dữ liệu bằng cách sdung các tham chiếu đến các nút trong cây dữ liệu 

- JSON (Javascript Object Notation): Là một kiểu định dạng dữ liệu dựa trên văn bán và có cú pháp tươnh tự như Object trong js
- Công dụng của JSON: Thường đc sử dụng để truyền dữ liệu trong các ứng dụng WEB, ví dự gửi dữ liệu từ SERVER đến CLIENT để nó có thể hiển thị trên một trang web hoặc ngược lại. JSON có các loại giá trị sau: chuỗi, số, đối tượng, boolean, null. JSON có các ưu điểm: định dạng đơn giản, hỗ trợ nhiều ngôn ngữ lập trình và kích thước nhỏ

VD minh hoạ:
{
    name: "Nga",
    age:"17",
    address: {
        city: "HN",
        district: "Tây hồ",
    },
    marriage: false,
    children: null
}
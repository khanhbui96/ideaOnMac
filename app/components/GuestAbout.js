import React from 'react';
import Typography from '@material-ui/core/Typography'

const About = ()=>{
    return(
        <div>
            <Typography style={{fontWeight: 'bolder', color: 'blue'}}>
            Được phát triển bởi một sĩ quan chỉ huy vận tải. 
            Phần mềm quản lý - hiệp đồng vận tải là sự kết hợp giữa kiến thức được đào tạo tại Học viện Hậu cần và kinh nghiệm thực tiễn công tác tại Sư đoàn 320 - Quân đoàn 3.
            </Typography>
            <Typography style={{fontWeight: 'bolder'}}>
            A. MỤC TIÊU CỦA PHẦN MỀM
            </Typography>
            <Typography>
            - Tiết kiệm thời gian và nguồn lực cho công tác quản lý và hiệp đồng vận tải.
            </Typography>
            <Typography>
            - Kiểm soát chặt chẽ nhân viên, trang thiết bị vận tải của đơn vị.
            </Typography>
            <Typography>
            - Thuận lợi trong công tác quản lý và hiệp đồng vận tải.
            </Typography>
            <Typography>
            - Giúp lãnh đạo, chỉ huy đánh giá kịp thời và chính xác thực lực vận tải của đơn vị.
            </Typography>
            <Typography>
            - Là công cụ chứng minh sự hiện đại của quân đội trong cuộc cách mạng khoa học kĩ thuật lần thứ 4 hiện nay.
            </Typography>
            <Typography style={{fontWeight: 'bolder'}}>
            B. ĐẶC ĐIỂM CỦA PHẦN MỀM 
            </Typography>
            <Typography>
            - Được thiết kế để chạy trên desktop (máy tính bàn) và laptop (máy tính xách tay) sử dụng hệ điều hành window.
            </Typography>
            <Typography>
            - Không cần cài đặt cơ sở dữ liệu( Hệ thống sẽ chạy trên cơ sở dữ liệu tập trung, tất cả các máy trạm sẽ liên kết đến database chung trên mạng Lan hoặc trên Internet.).
            </Typography>
            <Typography>
            - Chính xác - nhanh chóng - hiệu quả và đồng bộ.
            </Typography>
            <Typography>
            - Phân quyền và bảo mật cao.
            </Typography>
            <Typography style={{fontWeight: 'bolder'}}>
            C. CHỨC NĂNG: (Bạn đang đăng nhập tài khoản phân quyền Cơ quan - đơn vị)
            </Typography>
            <Typography style={{fontWeight: 'bolder'}}>
                1. Lựa chọn phương tiện vận chuyển
            </Typography>
            <Typography>
                - Căn cứ vào đối tượng vận chuyển, đường vận chuyển và lượng vận chuyển đề xuất những phương tiện phù hợp nhất.
            </Typography>
            <Typography style={{fontWeight: 'bolder'}}>
                2. Xác định lượng xăng dầu cần thiết 
            </Typography>
            <Typography>
                - Căn cư vào định mức, quãng đường vận chuyển và những yếu tố đặc biệt khác để tính toán lượng xăng, dầu cần thiết cho chuyến vận chuyển.
            </Typography>
            <Typography style={{fontWeight: 'bolder'}}>
                3. Đăng kí lệnh vận chuyển
            </Typography>
            <Typography>
                - Trên cơ sở nhiệm vụ vận chuyển đề xuất lệnh vận chuyển lên đơn vị có thẩm quyền phê duyệt.
            </Typography>
            <Typography style={{fontWeight: 'bolder'}}>
                4. Quản lí phương tiện của đơn vị
            </Typography>
            <Typography>
                - Quản lí phương tiện cá nhân của các quân nhân trong đơn vị.
            </Typography>
            <Typography>
                
            </Typography>
        </div>
    )
};

export default About
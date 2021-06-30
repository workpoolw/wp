import { useEffect } from 'react';

function Login() {
    useEffect(() => {
        let nav = document.querySelector('.nav');
        nav.classList.remove('on');
        nav.classList.add('off');
    });

    return (
        <div className="login">
            <div className="inner">
                <h4>로그인</h4>
                <div className="area">
                    <label htmlFor="id">아이디</label>
                    <input type="text" name="id"/><br/>
                    <label htmlFor="pw">비밀번호</label>
                    <input type="password" name="pw"/><br/>
                    <p>아이디 찾기 | 비밀번호 찾기 | 회원가입</p>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
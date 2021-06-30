function Sub({match, location}) {
    console.log(location);
    return (
        <div className="sub">
            <div className="inner">
                <div className="top">
                    <h5>{ location.state.title }</h5>
                </div>
                <div className="middle">
                    <div className="default">
                        <p className="price_t">기본 요금</p>
                        <p className="price">{ Number(location.state.defaultPrice).toLocaleString() }</p>
                        <div className="pay">
                            <p>기본</p>
                            <ul>
                                <li>-</li>
                                <li>1</li>
                                <li>+</li>
                            </ul>
                            <span>{ Number(location.state.defaultPrice).toLocaleString() }원(VAT 포함가)</span>
                        </div>
                            <button>결제하기</button>
                            <button>문의하기</button>
                        </div>
                    </div>
                <div className="contents">
                    <pre>
                        { location.state.contents }
                    </pre>
                </div>
                <div className="bottom">
                    <p className="username">{ location.state.username }</p>
                    <p>연락 가능 시간 : <span>{ location.state.defaultStartTime }:00~{ location.state.defaultEndTime }:00</span></p>
                </div>
                <div className="info">
                    <ul>
                        <li>서비스 완료 이후 판매자에게 결제 금액이 전달됩니다.</li>
                    </ul>
                </div>
                </div>
            </div>
    );
};

export default Sub;
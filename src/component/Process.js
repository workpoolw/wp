import Button from '@material-ui/core/Button';

function Process() {
    return (
        <div className="process">
            <div className="inner">
                <h4>진행 프로세스</h4>
                <div className="left">
                    <ul>
                        <li><span>1</span>판매자 검색</li>
                        <li><span>2</span>콘텐츠 주문</li>
                        <li><span>3</span>작업 요청</li>
                        <li><span>4</span>작업 확인</li>
                        <li><span>5</span>평가 작성</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="box">
                        <div>
                            <Button variant="contained">STEP 1</Button>
                            <span>판매자는 판매할 콘텐츠 제작</span>
                        </div>
                        <div>
                            <Button variant="contained">STEP 2</Button>
                            <span>구매자는 구매할 콘텐츠/구매자/분야 검색</span>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <Button variant="contained">STEP 1</Button>
                            <span>구매자는 콘텐츠 문의/주문/결제</span>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <Button variant="contained">STEP 1</Button>
                            <span>판매자는 작업 접수 후 콘텐츠 제작 진행</span>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <Button variant="contained">STEP 1</Button>
                            <span>구매자는 중간 상황을 단계별로 따라 확인</span>
                        </div>
                        <div>
                            <Button variant="contained">STEP 2</Button>
                            <span>판매자는 작업물 상태를 일자/단계에 따라 게시</span>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <Button variant="contained">STEP 1</Button>
                            <span>구매자는 콘텐츠 최종 확인 후 리뷰 작성</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;
import GestureIcon from '@material-ui/icons/Gesture';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

function Categotry() {
    return (
        <div className="category">
            <div className="inner">
                <h4>단순 의뢰에서 전문적인 고퀄리티 작업까지,<br />원하는 작업물을 단계별로 확인·수정할 수 있는 전문 서비스입니다.</h4>
                <div className="area">
                    <ul>
                        <li>
                            <GestureIcon />
                            <h5>디자인</h5>
                        </li>
                        <li>
                            <DeveloperBoardIcon />
                            <h5>개발</h5>
                        </li>
                        <li>
                            <SpellcheckIcon />
                            <h5>문서</h5>
                        </li>
                        <li>
                            <MovieFilterIcon />
                            <h5>영상/사진</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categotry;
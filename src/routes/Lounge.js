import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DATA from '../json/data';

function Lounge() {
    useEffect(() => {
        let nav = document.querySelector('.nav');
        nav.classList.remove('on');
        nav.classList.add('off');
    });

    const [item, SetItem] = useState(DATA);

    let params = useParams();

    return (
        <div className="lounge">
            <div className="inner">
                <div className="top">
                    <h4>{ params.catename } 라운지</h4>
                </div>
                { item.map((i) => {
                    if(params.catename == i.sort) {
                        return (
                            <div className="box">
                                <Link to={ {
                                    pathname: `cate/${params.catename}/${i.username}`,
                                    state: {
                                        title: i.title,
                                        username: i.username,
                                        contents: i.contents,
                                        defaultPrice: i.defaultPrice,
                                        defaultStartTime: i.defaultStartTime,
                                        defaultEndTime: i.defaultEndTime
                                    }
                                } }>
                                    <div className="left">
                                        <img src={ './images/' + i.img + '.jpg' } alt="이미지"/>
                                    </div>
                                    <div className="right">
                                        <h5>{ i.title }</h5>
                                        <p className="user">{ i.username }</p>
                                        <p className="startCnt">★★★★★ { i.starCnt }</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    }
                }) }
                <div className="bottom">
                    <ul>
                        <li>이전</li>
                        <li>1</li>
                        <li>다음</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Lounge;
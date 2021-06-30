import { useEffect } from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../js/script.js';
import Visual from '../component/Visual';
import Categotry from '../component/Categotry';
import Process from '../component/Process';
import Matching from '../component/Matching';
import Sec1 from '../component/Sec1';

function Main() {
    useEffect(() => {
        let nav = document.querySelector('.nav');
        nav.classList.remove('on');
        nav.classList.add('off');
    });

    return (
        <div className="main">
            <div className="container">
                <Visual />
                <Categotry />
                <Process />
                {/* <View /> */}
                <Matching />
                <Sec1 />
            </div>
        </div>
    );
}

export default Main;

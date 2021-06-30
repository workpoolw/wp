import DATA from '../json/data.js';

function View() {
    // const imgUrl = `/images/${item.img}.jpg`;

    return (
        <div className="view">
            <div className="inner">
                {DATA.map((item, index) => {
                    return <span key={index}>{item.title}</span>
                })}
            </div>
        </div>
    );
};

export default View;
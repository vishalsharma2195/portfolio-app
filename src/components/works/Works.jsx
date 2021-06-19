import React, {useState} from 'react'
import './works.scss'


function Works() {
    const [current, setCurrent] = useState(0)
    const data = [
        {
          id: "1",
          icon: "./assests/computer.png",
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assests/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assests/globe.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

      const handleClick = (way) => {
          way === 'left' ? setCurrent(current > 0 ? current - 1 : 2) :
          setCurrent(current < data.length - 1 ? current + 1 : 0)
      }
    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform: `translateX(-${current * 100}vw)`}}>
               {data.map((item) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                        <img
                  src={item.img}alt=""
                />
                        </div>
                    </div>
               </div>
               ))}
            </div>
            <img src="assests/arrow2.png" className='arrow left' alt="" onClick={() => handleClick("left")} />
            <img src="assests/arrow2.png" className='arrow right' alt="" onClick={() => handleClick("right")} />
        </div>
    )
}

export default Works

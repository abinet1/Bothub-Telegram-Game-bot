import rank_1 from '../../images/rank_1.png';
import rank_2 from '../../images/rank_2.png';
import rank_3 from '../../images/rank_3.png';
import rank_4 from '../../images/rank_4.png';
import rank_5 from '../../images/rank_5.png';
import rank_6 from '../../images/rank_6.png';
import rank_7 from '../../images/rank_7.png';
import rank_8 from '../../images/rank_8.png';
import rank_9 from '../../images/rank_9.png';
import rank_10 from '../../images/rank_10.png';

interface IScoreProgressBarProps {
    level?: number,
    size?: 'sm' | 'md' | 'lg',
    totalScore: number,
    currentScore: number,
    bottomText?: React.ReactNode,
}

const ScoreProgressBar = (props: IScoreProgressBarProps) => {
    const {
        level = 1,
        totalScore = 999,
        currentScore = 555,
        bottomText,
    } = props;
    const levelIcons: {[key: number]: string} = { 
        0: rank_1,
        1: rank_2,
        2: rank_3,
        3: rank_4,
        4: rank_5,
        5: rank_6,
        6: rank_7,
        7: rank_8,
        8: rank_9,
        9: rank_10,
    };

    const progress = (currentScore / totalScore) * 100;

    return (
        <div>
            <h1 className="text-white text-md font-normal mb-5">Defense Level {level}</h1>
            <div style={{ position: 'relative', height: '38px' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'linear-gradient(to right, #7700FF 0%, #FFFFFF 52.5%, #7700FF 100%)',
                        clipPath: 'polygon(0 50%, 21px 0, 350px 0, 372px 50%, 350px 100%, 21px 100%)',
                    }}
                />
                <div
                    style={{
                    position: 'absolute',
                    top: 2,
                    left: 2,
                    width: '100%', // Adjust for progress
                    height: '91%',
                    background: '#090a24',
                    clipPath: 'polygon(0 50%, 19px 0, 348px 0, 367px 50%, 347px 100%, 19px 100%)',
                    }}
                />
                <div
                    style={{
                    position: 'absolute',
                    top: 2,
                    left: 2,
                    width: `${progress}%`, // Adjust for progress
                    height: '91%', 
                    backgroundImage: 'linear-gradient(to right, #190944, #7700FF)',
                    clipPath: 'polygon(0 50%, 19px 0, 350px 0, 368px 50%, 349px 100%, 19px 100%)',
                    }}
                />
                <h1 className="absolute text-xl text-white font-bold mt-1 ml-[25%]">
                    {currentScore}/{totalScore}
                </h1>
                {levelIcons?.[level] &&
                    <div className="absolute">
                        <img style={{maxWidth:'100px', height: '82px', marginTop: '-22px', marginLeft: '-15px'}} src={levelIcons?.[level]} alt="level" />
                    </div>
                }
                {bottomText &&
                    bottomText
                }
            </div>
        </div>
    )
}

export default ScoreProgressBar;

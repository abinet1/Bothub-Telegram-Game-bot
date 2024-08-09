import bgImage from '../../images/bgImage.png'
import { InternetIcon, TelegramIcon, XSocialIcon, YoutubeIcon } from '../../icons';
import colors from '../../themes/colors';
import OnbordingScreenWraper from './onbording_screen_wraper';

function WelcomeScreen() {
  return (
    <OnbordingScreenWraper bgImage={bgImage}>
      <div className="absolute z-10 inset-0 flex flex-col items-center gap-[75px] justify-center text-white">
        <div className="w-[100px] h-[100px] border-[7px] border-backgroundshade-300 border-t-background rounded-full animate-spin"></div>
        <div className="flex flex-col items-center justify-center text-secondary">
          <h1 className="text-5xl">The</h1>
          <h1 className="text-6xl" style={{ fontWeight: 900 }}>Lucidia</h1>
          <h1 className="text-5xl">Alliance</h1>
        </div>
        <div className="flex flex-col items-center gap-5 justify-center text-white">
          <h1 className='text-3xl' style={{ fontWeight: 700 }} >Let’s win together!</h1>
          <h1 className='text-1xl' style={{ fontWeight: 500 }} >Stay connected on our socials</h1>
          <div className="flex items-center justify-center gap-3">
            <div
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                borderRadius: '25px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.backgroundshade['500']
              }}
            >
              <InternetIcon width={'25px'} height={'25px'} />
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                borderRadius: '25px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.backgroundshade['500']
              }}
            >
              <TelegramIcon width={'25px'} height={'25px'} />
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                borderRadius: '25px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.backgroundshade['500']
              }}
            >
              <YoutubeIcon width={'25px'} height={'25px'} />
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                borderRadius: '25px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.backgroundshade['500']
              }}
            >
              <XSocialIcon width={'25px'} height={'25px'} />
            </div>
          </div>
        </div>
      </div>
    </OnbordingScreenWraper>
  );
}

export default WelcomeScreen;

import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";
import SubContainer from "../../../components/SubContainer";

const Icons = () => {
  return (
    <>
      <SectionHeader name="Icons" icon="icons" />
      <Container
        title="FontAwesome"
        desc="Font Awesome is the Internet's icon library and toolkit, used by
        millions of designers, developers, and content creators."
      >
        <div className="mb-5">
          <p>
            Here you'll find a collection of visual elements that help to
            communicate and reinforce our brand message. These icons are
            designed to be simple, clear, and easy to understand. They can be
            used across different mediums, such as web and mobile interfaces, as
            well as in print materials. Here you can browse our icon library,
            learn about the guidelines and best practices for using icons in
            your designs, and download the icons in various formats for use in
            your own projects.
          </p>
          <p>
            <a href="https://fontawesome.com/">https://fontawesome.com/</a>
          </p>
        </div>

        <SubContainer>
          <div className="text-center">
            <i className="fa-light fa-coffee fa-5x"></i>
            <h4 className="mt-2">Coffee</h4>
            <p className="m-0">
              "It is inhumane, in{" "}
              <a href="https://www.washingtonpost.com/archive/lifestyle/magazine/1997/11/09/grounds-for-suspicion/075c7cfe-d5cf-4443-ae42-a95e6e46fed7/">
                my opinion
              </a>
              , to force people who have a genuine medical need for coffee to
              wait in line behind people who apparently view it as some kind of
              recreational activity."
            </p>
          </div>
        </SubContainer>

        <h3>Relative Sizing</h3>
        <div className="mb-5">
          <p>
            Font Awesome includes a range of sizes that not only increase or
            decrease an icon's size, but also help vertically align an icon with
            surrounding text and elements (e.g. button padding). This is great
            for increasing/decreasing an icon's size while maintaining
            legibility and alignment alongside UI elements.
          </p>
          <div className="border-top py-3">
            <i className="fa-light fa-coffee fa-2xs me-1"></i> When my six
            o’clock alarm buzzes, I require a pot of good java.
          </div>
          <div className="border-top py-3">
            <i className="fa-light fa-coffee fa-xs me-1"></i> When my six
            o’clock alarm buzzes, I require a pot of good java.
          </div>
          <div className="border-top py-3">
            <i className="fa-light fa-coffee fa-sm me-1"></i> When my six
            o’clock alarm buzzes, I require a pot of good java.
          </div>
          <div className="border-top py-3">
            <i className="fa-light fa-coffee me-1"></i> When my six o’clock
            alarm buzzes, I require a pot of good java.
          </div>
          <div className="border-top py-3">
            <i className="fa-light fa-coffee fa-lg me-1"></i> When my six
            o’clock alarm buzzes, I require a pot of good java.
          </div>
          <div className="border-top py-3">
            <i className="fa-light fa-coffee fa-xl me-1"></i> When my six
            o’clock alarm buzzes, I require a pot of good java.
          </div>
          <div className="border-top border-bottom py-3">
            <i className="fa-light fa-coffee fa-2xl me-1"></i> When my six
            o’clock alarm buzzes, I require a pot of good java.
          </div>
        </div>

        <h3>Literal Sizing</h3>
        <p>
          Font Awesome also includes a literal size scale to make increasing an
          icon's size from 1x to 10x easy and efficient. Literal sizing is
          useful for sizing icons at a larger scale or in cases where text
          alignment isn't a primary concern.
        </p>
        <SubContainer>
          <i className="fa-light fa-camera fa-1x me-2"></i>
          <i className="fa-light fa-camera fa-2x me-2"></i>
          <i className="fa-light fa-camera fa-3x me-2"></i>
          <i className="fa-light fa-camera fa-4x me-2"></i>
          <i className="fa-light fa-camera fa-5x me-2"></i>
          <i className="fa-light fa-camera fa-6x me-2"></i>
          <i className="fa-light fa-camera fa-7x me-2"></i>
          <i className="fa-light fa-camera fa-8x me-2"></i>
          <i className="fa-light fa-camera fa-9x me-2"></i>
          <i className="fa-light fa-camera fa-10x me-2"></i>
        </SubContainer>

        <h3>Fixed Width Icons</h3>
        <div className="mb-5">
          <p>
            Make all your icons the same width so they can easily vertically
            align, like in a list or navigation menu. Add a className of{" "}
            <code>fa-fw</code> on the HTML element referencing your icon to set
            one or more icons to the same fixed width.
          </p>
          <p>
            This is great to use when varying icon widths (e.g. a tall but
            skinny icon atop a wide but short icon) would throw off vertical
            alignment. For clarity in the following example, we’ve added a
            background color on the icon so you can see the fixed width and also
            bumped up the font-size of the parent element.
          </p>
          <SubContainer>
            <div className="fs-1">
              <div>
                <i className="fa-solid fa-skating fa-fw bg-white"></i> Skating
              </div>
              <div>
                <i className="fa-solid fa-skiing fa-fw bg-white"></i> Skiing
              </div>
              <div>
                <i className="fa-solid fa-skiing-nordic fa-fw bg-white"></i>{" "}
                Nordic Skiing
              </div>
              <div>
                <i className="fa-solid fa-snowboarding fa-fw bg-white"></i>{" "}
                Snowboarding
              </div>
              <div>
                <i className="fa-solid fa-snowplow fa-fw bg-white"></i> Snowplow
              </div>
            </div>
          </SubContainer>
        </div>

        <h3>Icons in a list</h3>
        <div className="mb-5">
          <p>
            Use <code>fa-ul</code> and <code>fa-li</code> to replace default
            bullets in unordered lists.
          </p>
          <div className="py-3 border-top border-bottom">
            <ol className="my-0 fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-check-square"></i>
                </span>
                List icons can
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-check-square"></i>
                </span>
                be used to
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-spinner fa-pulse"></i>
                </span>
                replace bullets
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-regular fa-square"></i>
                </span>
                in lists
              </li>
            </ol>
          </div>
        </div>

        <h3>Rotate icons</h3>
        <div className="mb-5">
          <p>
            To arbitrarily rotate and flip icons, use the{" "}
            <code>fa-rotate-*</code> and
            <code>fa-flip-*</code> classes when you reference an icon.
          </p>
          <div className="fa-3x">
            <i className="fa-solid fa-snowboarding me-1"></i>
            <i className="fa-solid fa-snowboarding fa-rotate-90 me-1"></i>
            <i className="fa-solid fa-snowboarding fa-rotate-180 me-1"></i>
            <i className="fa-solid fa-snowboarding fa-rotate-270 me-1"></i>
            <i className="fa-solid fa-snowboarding fa-flip-horizontal me-1"></i>

            <i className="fa-solid fa-snowboarding fa-flip-vertical me-1"></i>
            <i className="fa-solid fa-snowboarding fa-flip-both me-1"></i>
          </div>
        </div>

        <h3>Animating icons</h3>
        <p>
          Check this{" "}
          <a
            href="https://fontawesome.com/docs/web/style/animate"
            target="_blank"
          >
            page
          </a>{" "}
          for more details.
        </p>
        <div className="fa-3x border-top border-bottom py-4">
          <style>
            {`
              .test-anim1 {
                --fa-animation-duration: 0.5s;
              }
              .test-anim2 {
                --fa-animation-duration: 2s;
              }
              .test-anim3 {
                --fa-beat-scale: 2;
              }
              .test-anim4 {
                --fa-animation-duration: 2s;
                --fa-fade-opacity: 0.6;
              }
              .test-anim5 {
                --fa-beat-fade-opacity: 0.1;
                --fa-beat-fade-scale: 1.25;
              }
              .test-anim6 {
                --fa-beat-fade-opacity: 0.67;
                --fa-beat-fade-scale: 1.075;
              }
              .test-anim7 {
                --fa-bounce-start-scale-x: 1;
                --fa-bounce-start-scale-y: 1;
                --fa-bounce-jump-scale-x: 1;
                --fa-bounce-jump-scale-y: 1;
                --fa-bounce-land-scale-x: 1;
                --fa-bounce-land-scale-y: 1;
              }
              .test-anim8 {
                --fa-bounce-start-scale-x: 1;
                --fa-bounce-start-scale-y: 1;
                --fa-bounce-jump-scale-x: 1;
                --fa-bounce-jump-scale-y: 1;
                --fa-bounce-land-scale-x: 1;
                --fa-bounce-land-scale-y: 1;
                --fa-bounce-rebound: 0;
              }
              .test-anim9 {
                --fa-flip-x: 1;
                --fa-flip-y: 0;
              }
              .test-anim10 {
                --fa-animation-duration: 3s;
              }
              .test-anim11 {
                --fa-animation-direction: reverse;
              }
              .test-anim12 {
                --fa-animation-duration: 15s;
              }
              .test-anim13 {
                --fa-animation-duration: 30s;
                --fa-animation-iteration-count: 1;
              }
              .test-anim14 {
                --fa-animation-duration: 3s;
                --fa-animation-iteration-count: 5;
                --fa-animation-timing: ease-in-out;
              }
            `}
          </style>
          <i className="fa-solid fa-circle-plus fa-beat me-3"></i>
          <i className="fa-solid fa-heart fa-beat me-3"></i>
          <i className="test-anim1 fa-solid fa-heart fa-beat me-3"></i>
          <i className="test-anim2 fa-solid fa-heart fa-beat me-3"></i>
          <i className="test-anim3 fa-solid fa-heart fa-beat"></i>
        </div>
        <div className="fa-3x border-top border-bottom py-4">
          <i className="fa-solid fa-triangle-exclamation fa-fade me-3"></i>
          <i className="fa-solid fa-skull-crossbones fa-fade me-3"></i>
          <i className="fa-solid fa-desktop-arrow-down fa-fade me-3"></i>
          <i className="test-anim4 fa-solid fa-i-cursor fa-fade"></i>
        </div>
        <div className="fa-3x border-top border-bottom py-4">
          <i className="fa-solid fa-triangle-person-digging fa-beat-fade me-3"></i>

          <i className="fa-solid fa-square-exclamation fa-beat-fade me-3"></i>
          <i className="test-anim5 fa-solid fa-poo-bolt fa-beat-fade me-3"></i>
          <i className="test-anim6 fa-solid fa-circle-info fa-beat-fade"></i>
        </div>
        <div className="fa-3x border-top border-bottom py-4">
          <i className="fa-solid fa-basketball fa-bounce me-3"></i>
          <i className="fa-solid fa-volleyball fa-bounce me-3"></i>
          <i className="test-anim7 fa-solid fa-frog fa-bounce me-3"></i>
          <i className="test-anim8 fa-solid fa-envelope fa-bounce"></i>
        </div>
        <div className="fa-3x border-top border-bottom py-4">
          <i className="fa-solid fa-compact-disc fa-flip me-3"></i>
          <i className="fa-solid fa-camera-rotate fa-flip me-3"></i>
          <i className="fa-solid fa-cassette-tape fa-flip me-3"></i>
          <i className="test-anim9 fa-solid fa-scroll fa-flip me-3"></i>
          <i className="fa-solid fa-money-check-dollar fa-flip"></i>
        </div>
        <div className="fa-3x border-top border-bottom py-4">
          <i className="fa-solid fa-bell fa-shake me-3"></i>
          <i className="fa-solid fa-lock fa-shake me-3"></i>
          <i className="fa-solid fa-stopwatch fa-shake me-3"></i>
          <i className="fa-solid fa-bomb fa-shake"></i>
        </div>
        <div className="fa-3x border-top border-bottom py-4">
          <i className="fa-solid fa-sync fa-spin me-3"></i>
          <i className="fa-solid fa-circle-notch fa-spin me-3"></i>
          <i className="fa-solid fa-cog fa-spin me-3"></i>
          <i className="fa-solid fa-cog fa-spin fa-spin-reverse me-3"></i>
          <i className="fa-solid fa-spinner fa-spin-pulse me-3"></i>
          <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
        </div>
        <div className="fa-3x border-top border-bottom py-4">
          <i className="fa-solid fa-cog fa-spin me-3"></i>
          <i className="test-anim11 fa-solid fa-cog fa-spin me-3"></i>
          <i className="test-anim12 fa-solid fa-cog fa-spin me-3"></i>
          <i className="test-anim13 fa-solid fa-compact-disc fa-spin me-3"></i>
          <i className="test-anim14 fa-solid fa-tire fa-spin"></i>
        </div>
      </Container>
    </>
  );
};

export default Icons;

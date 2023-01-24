import Container from "../_ui/Container";
import SectionHeader from "../_ui/SectionHeader";

const Icons = () => {
  return (
    <>
      <SectionHeader name="Icons" icon="icons" />
      <p className="mb-5">
        Here you'll find a collection of visual elements that help to
        communicate and reinforce our brand message. These icons are designed to
        be simple, clear, and easy to understand. They can be used across
        different mediums, such as web and mobile interfaces, as well as in
        print materials. Here you can browse our icon library, learn about the
        guidelines and best practices for using icons in your designs, and
        download the icons in various formats for use in your own projects.
      </p>

      <div className="display-3">FontAwesome</div>
      <p>
        Font Awesome is the Internet's icon library and toolkit, used by
        millions of designers, developers, and content creators.
      </p>
      <p className="mb-5">
        <a href="https://fontawesome.com/">https://fontawesome.com/</a>
      </p>

      <Container>
        <h5>Relative Sizing</h5>
        <p>
          Font Awesome includes a range of t-shirt based sizes that not only
          increase or decrease an icon's size, but also help vertically align an
          icon with surrounding text and elements (e.g. button padding). This is
          great for increasing/decreasing an icon's size while maintaining
          legibility and alignment alongside UI elements.
        </p>
        <p>
          <i className="fa-light fa-coffee fa-2xs"></i> When my six o’clock
          alarm buzzes, I require a pot of good java.
        </p>
        <p>
          <i className="fa-light fa-coffee fa-xs"></i> When my six o’clock alarm
          buzzes, I require a pot of good java.
        </p>
        <p>
          <i className="fa-light fa-coffee fa-sm"></i> When my six o’clock alarm
          buzzes, I require a pot of good java.
        </p>
        <p>
          <i className="fa-solid fa-coffee"></i> When my six o’clock alarm
          buzzes, I require a pot of good java.
        </p>
        <p>
          <i className="fa-light fa-coffee fa-lg"></i> When my six o’clock alarm
          buzzes, I require a pot of good java.
        </p>
        <p>
          <i className="fa-light fa-coffee fa-xl"></i> When my six o’clock alarm
          buzzes, I require a pot of good java.
        </p>
        <p>
          <i className="fa-light fa-coffee fa-2xl"></i> When my six o’clock
          alarm buzzes, I require a pot of good java.
        </p>
        <h5 className="mt-5">Literal Sizing</h5>
        <p>
          Font Awesome also includes a literal size scale to make increasing an
          icon's size from 1x to 10x easy and efficient. Literal sizing is
          useful for sizing icons at a larger scale or in cases where text
          alignment isn't a primary concern.
        </p>
        <i className="fa-light fa-camera fa-1x"></i> &nbsp;
        <i className="fa-light fa-camera fa-2x"></i>&nbsp;
        <i className="fa-light fa-camera fa-3x"></i>&nbsp;
        <i className="fa-light fa-camera fa-4x"></i>&nbsp;
        <i className="fa-light fa-camera fa-5x"></i>&nbsp;
        <i className="fa-light fa-camera fa-6x"></i>&nbsp;
        <i className="fa-light fa-camera fa-7x"></i>&nbsp;
        <i className="fa-light fa-camera fa-8x"></i>&nbsp;
        <i className="fa-light fa-camera fa-9x"></i>&nbsp;
        <i className="fa-light fa-camera fa-10x"></i>
      </Container>
      <Container>
        <div className="text-center">
          <i className="fa-light fa-coffee fa-5x"></i>
          <h4>Coffee</h4>
          <p>
            "It is inhumane, in{" "}
            <a href="https://www.washingtonpost.com/archive/lifestyle/magazine/1997/11/09/grounds-for-suspicion/075c7cfe-d5cf-4443-ae42-a95e6e46fed7/">
              my opinion
            </a>
            , to force people who have a genuine medical need for coffee to wait
            in line behind people who apparently view it as some kind of
            recreational activity."
          </p>
        </div>
      </Container>

      <Container>
        <h5>Fixed Width Icons</h5>
        <p>
          Make all your icons the same width so they can easily vertically
          align, like in a list or navigation menu. Add a className of{" "}
          <code>fa-fw</code> on the HTML element referencing your icon to set
          one or more icons to the same fixed width.
        </p>
        <p>
          This is great to use when varying icon widths (e.g. a tall but skinny
          icon atop a wide but short icon) would throw off vertical alignment.
          For clarity in the following example, we’ve added a background color
          on the icon so you can see the fixed width and also bumped up the
          font-size of the parent element.
        </p>
        <div className="fs-1">
          <div>
            <i className="fa-solid fa-skating fa-fw bg-primary"></i> Skating
          </div>
          <div>
            <i className="fa-solid fa-skiing fa-fw bg-primary"></i> Skiing
          </div>
          <div>
            <i className="fa-solid fa-skiing-nordic fa-fw bg-primary"></i>{" "}
            Nordic Skiing
          </div>
          <div>
            <i className="fa-solid fa-snowboarding fa-fw bg-primary"></i>{" "}
            Snowboarding
          </div>
          <div>
            <i className="fa-solid fa-snowplow fa-fw bg-primary"></i> Snowplow
          </div>
        </div>
      </Container>
      <Container>
        <h5>Icons in a list</h5>
        <p>
          Use <code>fa-ul</code> and <code>fa-li</code> to replace default
          bullets in unordered lists.
        </p>
        <ol className="fa-ul">
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
      </Container>
      <Container>
        <h5>Rotate icons</h5>
        <p>
          To arbitrarily rotate and flip icons, use the <code>fa-rotate-*</code>{" "}
          and
          <code>fa-flip-*</code> classes when you reference an icon.
        </p>
        <div className="fa-3x">
          <i className="fa-solid fa-snowboarding"></i>&nbsp;
          <i className="fa-solid fa-snowboarding fa-rotate-90"></i>&nbsp;
          <i className="fa-solid fa-snowboarding fa-rotate-180"></i>&nbsp;
          <i className="fa-solid fa-snowboarding fa-rotate-270"></i>&nbsp;
          <i className="fa-solid fa-snowboarding fa-flip-horizontal"></i>&nbsp;
          <i className="fa-solid fa-snowboarding fa-flip-vertical"></i>&nbsp;
          <i className="fa-solid fa-snowboarding fa-flip-both"></i>
        </div>
      </Container>
      <Container>
        <h5>Animating icons</h5>
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
        <div className="fa-3x">
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
          <i className="fa-solid fa-circle-plus fa-beat"></i>&nbsp;
          <i className="fa-solid fa-heart fa-beat"></i>&nbsp;
          <i className="test-anim1 fa-solid fa-heart fa-beat"></i>&nbsp;
          <i className="test-anim2 fa-solid fa-heart fa-beat"></i>&nbsp;
          <i className="test-anim3 fa-solid fa-heart fa-beat"></i>
        </div>
        <div className="fa-3x">
          <i className="fa-solid fa-triangle-exclamation fa-fade"></i>&nbsp;
          <i className="fa-solid fa-skull-crossbones fa-fade"></i>&nbsp;
          <i className="fa-solid fa-desktop-arrow-down fa-fade"></i>&nbsp;
          <i className="test-anim4 fa-solid fa-i-cursor fa-fade"></i>
        </div>
        <div className="fa-3x">
          <i className="fa-solid fa-triangle-person-digging fa-beat-fade"></i>
          &nbsp;
          <i className="fa-solid fa-square-exclamation fa-beat-fade"></i>&nbsp;
          <i className="test-anim5 fa-solid fa-poo-bolt fa-beat-fade"></i>&nbsp;
          <i className="test-anim6 fa-solid fa-circle-info fa-beat-fade"></i>
        </div>
        <div className="fa-3x">
          <i className="fa-solid fa-basketball fa-bounce"></i>&nbsp;
          <i className="fa-solid fa-volleyball fa-bounce"></i>&nbsp;
          <i className="test-anim7 fa-solid fa-frog fa-bounce"></i>&nbsp;
          <i className="test-anim8 fa-solid fa-envelope fa-bounce"></i>
        </div>
        <div className="fa-3x">
          <i className="fa-solid fa-compact-disc fa-flip"></i>&nbsp;
          <i className="fa-solid fa-camera-rotate fa-flip"></i>&nbsp;
          <i className="fa-solid fa-cassette-tape fa-flip"></i>&nbsp;
          <i className="test-anim9 fa-solid fa-scroll fa-flip"></i>&nbsp;
          <i className="fa-solid fa-money-check-dollar fa-flip"></i>
        </div>
        <div className="fa-3x">
          <i className="fa-solid fa-bell fa-shake"></i>&nbsp;
          <i className="fa-solid fa-lock fa-shake"></i>&nbsp;
          <i className="fa-solid fa-stopwatch fa-shake"></i>&nbsp;
          <i className="fa-solid fa-bomb fa-shake"></i>
        </div>
        <div className="fa-3x">
          <i className="fa-solid fa-sync fa-spin"></i>&nbsp;
          <i className="fa-solid fa-circle-notch fa-spin"></i>&nbsp;
          <i className="fa-solid fa-cog fa-spin"></i>&nbsp;
          <i className="fa-solid fa-cog fa-spin fa-spin-reverse"></i>&nbsp;
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>&nbsp;
          <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
        </div>
        <div className="fa-3x">
          <i className="fa-solid fa-cog fa-spin"></i>&nbsp;
          <i className="test-anim11 fa-solid fa-cog fa-spin"></i>&nbsp;
          <i className="test-anim12 fa-solid fa-cog fa-spin"></i>&nbsp;
          <i className="test-anim13 fa-solid fa-compact-disc fa-spin"></i>&nbsp;
          <i className="test-anim14 fa-solid fa-tire fa-spin"></i>
        </div>
      </Container>
    </>
  );
};

export default Icons;

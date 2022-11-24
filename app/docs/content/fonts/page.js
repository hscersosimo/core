import Container from "../_ui/Container";
import SectionHeader from "../_ui/SectionHeader";

const Fonts = () => {
  return (
    <>
      <SectionHeader name="Fonts" icon="book-font" />

      <div className="display-3 mb-4">The Inter typeface family</div>
      <Container>
        <p className="fs-4">
          Inter is a typeface carefully crafted & designed for computer screens.
        </p>
        <p>
          Inter features a tall x-height to aid in readability of mixed-case and
          lower-case text. Several OpenType features are provided as well, like
          contextual alternates that adjusts punctuation depending on the shape
          of surrounding glyphs, slashed zero for when you need to disambiguate
          "0" from "o", tabular numbers, etc.
        </p>
        <p>
          <a href="https://rsms.me/inter/">https://rsms.me/inter/</a>
        </p>
      </Container>

      <Container>
        <div className="display-1 text-center text-break">
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]
        </div>
      </Container>

      <Container>
        <div className="mb-5">
          <div className="py-1 mb-2 fs-7 border-top text-secondary">
            Bold - Font size 1
          </div>
          <p className="fs-1 fw-bold">
            Maiorum voluptua fabellas vix ex. Est te rationibus efficiantur. Pri
            no iusto principes. Nam ad dolorem oporteat-
          </p>
        </div>

        <div className="row mb-5">
          <div className="col">
            <div className="py-1 mb-2 fs-7 border-top text-secondary">
              Regular - Font size 5 (large)
            </div>
            <p className="fs-5">
              Sumo mazim cu mea. Saepe postea voluptaria sea id, et mea oratio
              praesent. Est elitr necessitatibus ea. Mea eu legendos
              eloquentiam, nam id fabulas posidonium, an quis omnium mnesarchum
              nam. Maiorum voluptua fabellas vix ex.
            </p>
          </div>
          <div className="col">
            <p className="fs-6">
              <div className="py-1 mb-2 fs-7 border-top text-secondary">
                Regular - Font size 6 (medium)
              </div>
              Est te rationibus efficiantur. Pri no iusto principes. Nam ad
              dolorem oporteat, propriae inimicus intellegebat ei sed.
              Accommodare complectitur mei et, ne putent menandri sed. Sumo
              mazim cu mea. Saepe postea voluptaria sea id, et mea oratio
              praesent. Est elitr necessitatibus ea. Mea eu legendos
              eloquentiam, nam id fabulas posidonium, an quis omnium.
            </p>
          </div>
          <div className="col">
            <div className="py-1 mb-2 fs-7 border-top text-secondary">
              Regular - Font size 7 (small)
            </div>
            <p className="fs-7">
              Lorem ipsum dolor sit amet, libris salutatus abhorreant ut mea,
              mel eros decore dissentiet ad. Nostro tritani mel no, idque
              minimum nec id. Nec an tale unum elitr. Erat percipit sit ea, et
              his legimus senserit molestiae. Ei nam vide iudicabit, has eu cibo
              facilis. Sumo mazim cu mea. Saepe postea voluptaria sea id, et mea
              oratio praesent. Est elitr necessitatibus ea. Mea eu legendos
              eloquentiam, nam id fabulas posidonium, an quis omnium mnesarchum
              nam. Maiorum voluptua fabellas vix ex. Est te rationibus
              efficiantur. Pri no iusto principes. Nam ad dolorem oporteat,
              propriae inimicus intellegebat ei sed. Accommodare complectitur
              mei et, ne putent menandri sed.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Fonts;

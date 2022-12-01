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
        <p>Inter is a free and open source font family.</p>
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
        <h3>The story behind Inter</h3>
        <div className="row">
          <div className="col-sm-6">
            Inter started out in late 2016 as an experiment to build a perfectly
            pixel-fitting font at a specific small size (11px.) The idea was
            that by crafting a font in a particular way, with a particular
            coordinate system (Units Per EM), and for a particular target
            rasterization size (11), it would be possible to get the best of
            both sharpness and readability. However after a few months of using
            an early version of Inter, it dawned on everyone exposed to the test
            that this approach had some serious real-world problems. Most
            notably that it was really hard to read longer text. Because of the
            pixel-aligning nature of that approach, the font took
          </div>
          <div className="col-sm-6">
            an almost mono-spaced appearance, making it really easy to read
            numbers, punctuation and very short words, but eye-straining to read
            anything longer. The project was rebooted with a different approach,
            sticking with the specific UPM, but crafting glyphs and kerning in a
            way that made for more variation in the rhythm and smoother vertical
            and horizontal stems. As Inter was being developed, it was tested on
            an internal version of Figma—where the author of Inter works as a
            designer—and slowly improved upon based on experience and feedback.
          </div>
        </div>
      </Container>

      <Container>
        <div className="mb-5">
          <div className="py-1 mb-2 fs-7 border-top text-secondary">
            Bold - Font size 1 - lh-sm
          </div>
          <p className="fs-1 fw-bold lh-sm">
            Maiorum voluptua fabellas 1871 vix ex. Est te rationibus
            efficiantur. Pri no iusto principes. Nam ad dolorem oporteat.
          </p>
        </div>

        <div className="row">
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
            <div className="fs-6">
              <div className="py-1 mb-2 fs-7 border-top text-secondary">
                Regular - Font size 6 (medium)
              </div>
              Est te rationibus efficiantur. Pri no iusto principes. Nam ad
              dolorem oporteat, propriae inimicus intellegebat ei sed.
              Accommodare complectitur mei et, ne putent menandri sed. Sumo
              mazim cu mea. Saepe postea voluptaria sea id, et mea oratio
              praesent. Est elitr necessitatibus ea. Mea eu legendos
              eloquentiam, nam id fabulas posidonium, an quis omnium.
            </div>
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
      <Container>
        <div className="fs-7">
          <strong>Language support:</strong> Cyrillic Azerbaijani Belarusian
          Bosnian Bulgarian Chechen Macedonian Ossetic Russian Sakha Serbian
          Ukrainian Uzbek Greek Greek Latin Afrikaans Aghem Akan Albanian
          Asturian Asu Bafia Basaa Basque Bemba Bena Breton Catalan Chiga
          Colognian Cornish Croatian Czech Danish Duala Dutch Elfdalian Embu
          English Esperanto Estonian Ewe Ewondo Faroese Filipino Finnish French
          Friulian Fulah Galician Ganda German Gusii Hawaiian Hungarian
          Icelandic Igbo Inari Sami Indonesian Irish Italian Jola-Fonyi
          Kabuverdianu Kabyle Kako Kalaallisut Kalenjin Kamba Kikuyu Kinyarwanda
          Koyra Chiini Koyraboro Senni Kwasio Lakota Langi Latvian Lingala
          Lithuanian Lower Sorbian Luba-Katanga Luo Luxembourgish Luyia Machame
          Makhuwa-Meetto Makonde Malagasy Maltese Manx Māori Masai Meru Metaʼ
          Morisyen Mundang Nama Ngiemboon Ngomba North Ndebele Northern Sami
          Norwegian Bokmål Norwegian Nynorsk Nuer Nyankole Oromo Polish
          Portuguese Prussian Quechua Romanian Romansh Rombo Rundi Rwa Samburu
          Sango Sangu Scottish Gaelic Sena Serbian Shambala Shona Slovak
          Slovenian Soga Somali Spanish Swahili Swedish Swiss German Tachelhit
          Taita Tasawaq Teso Tongan Turkish Upper Sorbian Uzbek Vai Vietnamese
          Volapük Vunjo Walser Welsh Western Frisian Yangben Yoruba Zarma Zulu
        </div>
      </Container>
    </>
  );
};

export default Fonts;

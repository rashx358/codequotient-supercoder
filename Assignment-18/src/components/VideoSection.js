import img from "../images/lecture.jpg";
function InfoSection() {
  return (
    <section class="video-section">
      <div class="container grid text-center">
        <div class="video-section-text">
          <h2>The video lecture you shouldn't miss</h2>
          <p>
            With one of the best content available online.And one of the best
            instructors it makes Being Geeky one of the best available learing
            platform available.he spread of computers and layout programmes thus
            made dummy text better known. While in earlier times several lines
            of the Lorem Ipsum text were repeated in the creation of dummy
            texts, today the full text of Cicero's 'De finibus' serves as the
            basis for many dummy text or Lorem Ipsum generators. Based on 'De
            finibus', these generators automatically create longer sections of
            the Lorem Ipsum text or various other filler texts.
          </p>
          <a href="/test" class="btn">
            Read More
          </a>
        </div>
        <div>
          <img src={img} alt="lectures_image" style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;

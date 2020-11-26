function Index({ musicians }) {
  return (
    <ul>
      {musicians.map((musician) => (
        <li>
          <div>{musician.name}</div>
          <div>{musician.birthDate}</div>
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0,
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={`https://www.youtube.com/embed/${musician.presentationYID}`}
              frameBorder="0"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://jazzlib.egovelox.com/db/musicians.json");
  const musicians = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      musicians,
    },
  };
}

export default Index;

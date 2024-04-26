const ID = ({ data }: { data: any }) => {
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
};

export async function getStaticPaths() {
  const paths = new Array(10).fill(null).map((post, index) => ({
    params: { id: String(index + 1) },
  }));
  return { paths, fallback: false };
}

// 此函数在构建时被调用
export async function getStaticProps({ params }: { params: any }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default ID;

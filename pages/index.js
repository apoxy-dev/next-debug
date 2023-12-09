import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getServerSideProps({ req }) {
  const path = req.url;
  const headers = req.headers;
  return {
    props: {
      path,
      headers,
    },
  };
}

const excluded = [
	"cookie",
	"user-agent",
	"accept",
];

export default function Home({ path, headers }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Debug App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Request Information</h1>
        <p>Path: {path}</p>
				<div>
					<table>
						<thead align="left">
							<tr>
								<th>Header</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(headers).sort().map((key) => (
								excluded.indexOf(key) >= 0 ? null :
								<tr key={key}>
									<td>{key}</td>
									<td>{headers[key]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
        td {
          min-width: 240px;
        }
      `}</style>

      <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import SamomxmarebloLoanData from '../public/data/samomx-loans.json';
import styles from "../styles/ContentTable.module.css"

function SamomxmarebloTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.resolve(SamomxmarebloLoanData);
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      {data.map((item, index) => (
        <div key={index} className={styles['table-container']}>
          <h2 className={styles.tableContainerH2}>{item.title}</h2>
          <table className={styles.tableContainerTable}>
            {/* <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead> */}
            <tbody>
              {Object.entries(item.content).map(([key, value], idx) => (
                <tr key={idx} className={styles.tableContainerTR}>
                  <td className={styles.tableContainerTD}>{key}</td>
                  <td className={styles.tableContainerTD}>
                    {typeof value === 'object' ? (
                      <pre className={styles.tableContainerPRE}>{JSON.stringify(value, null, 2)}</pre>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <a href={item.LoanLink} target='_blank' rel="noreferrer" className={styles.takeLoanA}><button className={styles.takeLoanBtn}>სესხის აღება</button></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SamomxmarebloTable;

import "../styles/Disbursement.css";

const disbursements = [
  {
    date: "30/04/2024",
    loanId: "LN002-24-1001",
    status: "Draft",
    applicant: "Arjun Mehta",
    bank: "HDFC Bank",
    sanctioned: "7500.00",
    verified: "₹7,00,000.00",
    referral: "0.1500%",
    creditExecutive: "Arjun Mehta",
    bankExecutive: "Siddharth",
  },
  {
    date: "30/09/2024",
    loanId: "LN003-24-1002",
    status: "Submitted",
    applicant: "Mohit Agarwal",
    bank: "ICICI Bank",
    sanctioned: "12000.00",
    verified: "--",
    referral: "0.2500%",
    creditExecutive: "Mohit Agarwal",
    bankExecutive: "Tanvi",
  },
  {
    date: "12/05/2027",
    loanId: "LN004-24-1003",
    status: "Submitted",
    applicant: "Priya Singh",
    bank: "Axis Bank",
    sanctioned: "15000.00",
    verified: "--",
    referral: "0.3500%",
    creditExecutive: "Priya Singh",
    bankExecutive: "Deepa",
  },
  {
    date: "15/10/2024",
    loanId: "LN005-24-1004",
    status: "Submitted",
    applicant: "Simran Anand",
    bank: "State Bank of India",
    sanctioned: "22000.00",
    verified: "--",
    referral: "0.4500%",
    creditExecutive: "Simran Anand",
    bankExecutive: "Suresh",
  },
  {
    date: "20/02/2024",
    loanId: "LN006-24-1005",
    status: "Submitted",
    applicant: "Ravi Sharma",
    bank: "Kotak Mahindra Bank",
    sanctioned: "30000.00",
    verified: "--",
    referral: "0.5500%",
    creditExecutive: "Ravi Sharma",
    bankExecutive: "Rahul",
  },
  {
    date: "20/02/2024",
    loanId: "LN007-24-1006",
    status: "Submitted",
    applicant: "Sneha Joshi",
    bank: "Punjab National Bank",
    sanctioned: "40000.00",
    verified: "--",
    referral: "0.6500%",
    creditExecutive: "Sneha Joshi",
    bankExecutive: "Pooja",
  },
  {
    date: "20/02/2024",
    loanId: "LN008-24-1007",
    status: "Verified",
    applicant: "Vikram Desai",
    bank: "Canara Bank",
    sanctioned: "55000.00",
    verified: "₹15,789.01",
    referral: "0.7500%",
    creditExecutive: "Vikram Desai",
    bankExecutive: "Manish",
  },
  {
    date: "20/02/2024",
    loanId: "LN009-24-1008",
    status: "Audited",
    applicant: "Anjali Rao",
    bank: "Bank of Baroda",
    sanctioned: "75000.00",
    verified: "₹16,989.01",
    referral: "0.8500%",
    creditExecutive: "Anjali Rao",
    bankExecutive: "Kavita",
  },
  {
    date: "20/02/2024",
    loanId: "LN010-24-1009",
    status: "Audited",
    applicant: "Karan Iyer",
    bank: "Union Bank of India",
    sanctioned: "90000.00",
    verified: "₹17,003.23",
    referral: "0.9500%",
    creditExecutive: "Karan Iyer",
    bankExecutive: "Ankit",
  },
  {
    date: "20/02/2024",
    loanId: "LN010-24-1010",
    status: "Verified",
    applicant: "Neha Gupta",
    bank: "IDFC FIRST Bank",
    sanctioned: "130000.00",
    verified: "₹181,234.00",
    referral: "1.1500%",
    creditExecutive: "Neha Gupta",
    bankExecutive: "Ritika",
  },
];

function Disbursement({ addedDisbursements = [] }) {
  const tableData = [...addedDisbursements, ...disbursements];

  const submittedCount = tableData.filter(
    (item) => item.status === "Submitted"
  ).length;

  const verifiedCount = tableData.filter(
    (item) => item.status === "Verified"
  ).length;

  const auditedCount = tableData.filter(
    (item) => item.status === "Audited"
  ).length;

  return (
    <>
      <div className="disbursementHeader">
        <div>
          <h1>Disbursement</h1>

          <div className="breadcrumb">
            <span>RMS</span>
            <span>›</span>
            <b>Disbursement</b>
          </div>
        </div>

        <div className="buttons">
          <button className="draftBtn">Activity</button>
          <button className="draftBtn">Import Excel</button>
          <button className="addBtn">Add Disbursement</button>
        </div>
      </div>

      <div className="statsGrid">
        <div className="statCard">
          <p>Total Disbursements</p>
          <h2>{tableData.length}</h2>
        </div>

        <div className="statCard">
          <p>Total Disbursed Amount</p>
          <h2>₹3,62,50,000</h2>
        </div>

        <div className="statCard">
          <p>Submitted</p>
          <h2>{submittedCount}</h2>
        </div>

        <div className="statCard">
          <p>Verified</p>
          <h2>{verifiedCount}</h2>
        </div>

        <div className="statCard">
          <p>Processed</p>
          <h2>5</h2>
        </div>

        <div className="statCard">
          <p>Audited</p>
          <h2>{auditedCount}</h2>
        </div>
      </div>

      <div className="tableCard">
        <div className="tableToolbar">
          <input type="text" placeholder="Search for Disbursement" />

          <div className="toolbarActions">
            <button>Saved View</button>
            <button>Export All</button>
          </div>
        </div>

        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Disbursement Date</th>
                <th>Loan ID</th>
                <th>Status</th>
                <th>Applicant Name</th>
                <th>Bank Name</th>
                <th>Sanctioned Amt</th>
                <th>Verified</th>
                <th>Referral %</th>
                <th>Credit Executive</th>
                <th>Bank Executive</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>{item.date}</td>

                  <td>
                    <span className="loanLink">{item.loanId}</span>
                  </td>

                  <td>
                    <span className={`statusPill ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>

                  <td>{item.applicant}</td>
                  <td>{item.bank}</td>
                  <td>{item.sanctioned}</td>
                  <td>{item.verified}</td>
                  <td>{item.referral}</td>
                  <td>{item.creditExecutive}</td>
                  <td>{item.bankExecutive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span>Page</span>
          <button>1</button>
          <span>of 10</span>

          <div className="paginationRight">
            <span>Rows per page</span>

            <select>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Disbursement;
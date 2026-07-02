import { useState } from "react";
import Layout from "./layouts/Layout";
import AddLoan from "./pages/AddLoan";
import Disbursement from "./pages/Disbursement";

function App() {
  const [activePage, setActivePage] = useState("loans");
  const [addedDisbursements, setAddedDisbursements] = useState([]);

  const handleAddLoanToDisbursement = (loanData) => {
    const newDisbursement = {
      date: new Date().toLocaleDateString("en-GB"),
      loanId: `LN-${Date.now().toString().slice(-6)}`,
      status: "Submitted",
      applicant: loanData.customerName,
      bank: loanData.bank,
      sanctioned: loanData.loanAmount,
      verified: "--",
      referral: loanData.referralFee,
      creditExecutive: loanData.creditExecutive,
      bankExecutive: loanData.bankExecutive,
    };

    setAddedDisbursements((prevData) => [newDisbursement, ...prevData]);
    setActivePage("disbursement");
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {activePage === "loans" && (
        <AddLoan onAddLoanToDisbursement={handleAddLoanToDisbursement} />
      )}

      {activePage === "disbursement" && (
        <Disbursement addedDisbursements={addedDisbursements} />
      )}
    </Layout>
  );
}

export default App;
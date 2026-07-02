import { useRef, useState } from "react";
import "../styles/AddLoan.css";

function LoanDetailsPage({ loanData, onEdit }) {
  const formatCurrency = (value) => {
    const number = Number(value || 0);

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(number);
  };

  const loanAmount = Number(loanData.loanAmount || 0);
  const bankCommission = Number(loanData.bankCommission || 0);
  const referralFee = Number(loanData.referralFee || 0);
  const commission = Number(loanData.commission || 0);

  const netReceivable =
    loanAmount > 0 ? (loanAmount * (bankCommission - referralFee)) / 100 : 0;

  const brokerCommission =
    loanAmount > 0 ? (loanAmount * commission) / 100 : 0;

  return (
    <>
      <div className="detailsHeader">
        <div>
          <h1>Loan - {loanData.caseId}</h1>

          <div className="breadcrumb">
            <span>RMS</span>
            <span>›</span>
            <span>Loan</span>
            <span>›</span>
            <b>{loanData.customerName}</b>
          </div>
        </div>

        <div className="buttons">
          <button className="draftBtn">Archive</button>
          <button className="draftBtn">Activity Logs</button>
          <button className="addBtn" onClick={onEdit}>
            Edit Loan
          </button>
        </div>
      </div>

      <div className="loanDetailsCard">
        <div className="detailsTitleRow">
          <div>
            <h2>{loanData.customerName}</h2>
            <p>{loanData.productType}</p>
          </div>

          <span className="statusBadge">{loanData.status}</span>
        </div>

        <div className="summaryGrid">
          <div className="summaryBox">
            <p>Total Sanctioned Amount</p>
            <h3>{formatCurrency(loanData.loanAmount)}</h3>
          </div>

          <div className="summaryBox">
            <p>Bank Commission %</p>
            <h3>{loanData.bankCommission}%</h3>
          </div>

          <div className="summaryBox">
            <p>Referral Fee %</p>
            <h3>{loanData.referralFee}%</h3>
          </div>

          <div className="summaryBox greenBox">
            <p>Net Receivable</p>
            <h3>{formatCurrency(netReceivable)}</h3>
          </div>
        </div>

        <div className="detailsBody">
          <div className="detailsSideMenu">
            <button className="activeDetailTab">Customer Information</button>
            <button>Loan Information</button>
            <button>Broker Information</button>
            <button>Commission & Executive Details</button>
            <button>Notes / Additional Information</button>
            <button>Payment & Vouchers</button>
            <button>Documents</button>
          </div>

          <div className="detailsContent">
            <div className="infoCard">
              <div className="infoCardHeader">Customer Information</div>

              <div className="infoGrid">
                <div>
                  <p>Customer Name</p>
                  <h4>{loanData.customerName}</h4>
                </div>

                <div>
                  <p>Email</p>
                  <h4>{loanData.email}</h4>
                </div>

                <div>
                  <p>Phone Number</p>
                  <h4>{loanData.phoneNumber}</h4>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoCardHeader">Loan Information</div>

              <div className="infoGrid fourGrid">
                <div>
                  <p>Sanctioned Amt</p>
                  <h4>{formatCurrency(loanData.loanAmount)}</h4>
                </div>

                <div>
                  <p>Disbursed Amt</p>
                  <h4>₹0.00 awaiting approval</h4>
                </div>

                <div>
                  <p>Pending Amt</p>
                  <h4>{formatCurrency(loanData.loanAmount)}</h4>
                </div>

                <div>
                  <p>Case ID</p>
                  <h4>{loanData.caseId}</h4>
                </div>

                <div>
                  <p>Loan Type</p>
                  <h4>
                    <span className="purpleBadge">{loanData.productType}</span>
                  </h4>
                </div>

                <div>
                  <p>Bank</p>
                  <h4>{loanData.bank}</h4>
                </div>

                <div>
                  <p>Status</p>
                  <h4>
                    <span className="statusBadge small">{loanData.status}</span>
                  </h4>
                </div>

                <div>
                  <p>Stage</p>
                  <h4>{loanData.stage}</h4>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoCardHeader">Broker Information</div>

              <div className="brokerDetailsRow">
                <div>
                  <p>Broker Name</p>
                  <h4>{loanData.brokerName}</h4>
                </div>

                <div>
                  <p>Broker Type</p>
                  <h4>
                    <span className="blueBadge">{loanData.brokerType}</span>
                  </h4>
                </div>

                <div>
                  <p>Broker Code</p>
                  <h4>{loanData.brokerCode}</h4>
                </div>

                <div>
                  <p>Commission Percentage</p>
                  <h4>{loanData.commission}%</h4>
                </div>

                <div>
                  <p>Commission Amt</p>
                  <h4>{formatCurrency(brokerCommission)}</h4>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoCardHeader">
                Commission & Executive Details
              </div>

              <div className="infoGrid fiveGrid">
                <div>
                  <p>Credit Executive</p>
                  <h4>{loanData.creditExecutive}</h4>
                </div>

                <div>
                  <p>Bank Executive</p>
                  <h4>{loanData.bankExecutive}</h4>
                </div>

                <div>
                  <p>Bank Commission</p>
                  <h4>{loanData.bankCommission}%</h4>
                </div>

                <div>
                  <p>Referral Fee</p>
                  <h4>{loanData.referralFee}%</h4>
                </div>

                <div>
                  <p>Bill Comm Amt</p>
                  <h4>{formatCurrency((loanAmount * bankCommission) / 100)}</h4>
                </div>

                <div>
                  <p>GST Amt 18%</p>
                  <h4>
                    {formatCurrency(
                      ((loanAmount * bankCommission) / 100) * 0.18
                    )}
                  </h4>
                </div>

                <div>
                  <p>Invoice Amt</p>
                  <h4>
                    {formatCurrency(
                      (loanAmount * bankCommission) / 100 +
                        ((loanAmount * bankCommission) / 100) * 0.18
                    )}
                  </h4>
                </div>

                <div>
                  <p>TDS Amt</p>
                  <h4>
                    {formatCurrency(
                      ((loanAmount * bankCommission) / 100) * 0.1
                    )}
                  </h4>
                </div>

                <div className="netBox">
                  <p>Net Receivable</p>
                  <h4>{formatCurrency(netReceivable)}</h4>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoCardHeader">
                Notes / Additional Information
              </div>

              <div className="notesBox">{loanData.notes}</div>
            </div>

            <div className="infoCard">
              <div className="infoCardHeader">Payment & Vouchers</div>

              <div className="infoGrid fiveGrid">
                <div>
                  <p>Surplus / Deficit</p>
                  <h4>₹5,000 Surplus</h4>
                </div>

                <div>
                  <p>Receipt Amount</p>
                  <h4>₹1.3L</h4>
                </div>

                <div>
                  <p>Receipt Date</p>
                  <h4>2024-04-15</h4>
                </div>

                <div>
                  <p>Advance Payment</p>
                  <h4>₹50,000</h4>
                </div>

                <div>
                  <p>Payment Date</p>
                  <h4>2024-04-01</h4>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoCardHeader">Documents</div>

              <div className="documentsRow">
                <div className="documentBox">📄 Invoice.pdf</div>
                <div className="documentBox">📄 Agreement.pdf</div>
                <div className="documentBox">📄 Loan.pdf</div>
                <div className="documentBox">📄 KYC.pdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AddLoan() {
  const formRef = useRef(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [loanDetails, setLoanDetails] = useState(null);

  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
    detailsData: null,
  });

  const showPopup = (type, title, message, detailsData = null) => {
    setPopup({
      show: true,
      type,
      title,
      message,
      detailsData,
    });
  };

  const closePopup = () => {
    const detailsData = popup.detailsData;

    setPopup({
      show: false,
      type: "success",
      title: "",
      message: "",
      detailsData: null,
    });

    if (detailsData) {
      setLoanDetails(detailsData);
      setShowDetails(true);
    }
  };

  const allowOnlyLetters = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  };

  const allowOnlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  };

  const allowOnlyPhone = (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, "");
  };

  const isGmail = (email) => {
    return /^[A-Za-z0-9._%+-]+@gmail\.com$/.test(email);
  };

  const validateForm = () => {
    const fields = formRef.current.querySelectorAll("input, select, textarea");

    for (let field of fields) {
      if (field.value.trim() === "") {
        showPopup(
          "error",
          "Missing Information",
          "Please fill all information first."
        );

        field.focus();
        return false;
      }
    }

    const email = formRef.current.querySelector('[name="email"]');

    if (!isGmail(email.value)) {
      showPopup(
        "error",
        "Invalid Email",
        "Email must be valid and end with @gmail.com."
      );

      email.focus();
      return false;
    }

    return true;
  };

  const getFormData = () => {
    const fields = formRef.current.querySelectorAll("input, select, textarea");
    const data = {};

    fields.forEach((field) => {
      data[field.name] = field.value;
    });

    data.caseId = `LN-${new Date().getFullYear()}-${Date.now()
      .toString()
      .slice(-5)}`;

    return data;
  };

  const handleSaveDraft = () => {
    if (!validateForm()) return;

    setIsSaved(true);

    showPopup(
      "success",
      "Draft Saved",
      "Loan saved as draft successfully."
    );
  };

  const handleCancel = () => {
    setIsSaved(false);

    showPopup("warning", "Draft Cancelled", "Draft has been cancelled.");
  };

  const handleAddLoan = () => {
    if (!validateForm()) return;

    const data = getFormData();

    showPopup(
      "success",
      "Loan Added",
      "Loan added successfully. Click OK to view the loan details.",
      data
    );
  };

  if (showDetails && loanDetails) {
    return (
      <LoanDetailsPage
        loanData={loanDetails}
        onEdit={() => setShowDetails(false)}
      />
    );
  }

  return (
    <>
      {popup.show && (
        <div className="customPopupOverlay">
          <div className="customPopup">
            <div className={`popupIcon ${popup.type}`}>
              {popup.type === "success" && "✓"}
              {popup.type === "error" && "!"}
              {popup.type === "warning" && "!"}
            </div>

            <div className="popupContent">
              <h3>{popup.title}</h3>
              <p>{popup.message}</p>
            </div>

            <button className="popupOkBtn" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}

      <div className="pageHeader">
        <div>
          <h1>Loans</h1>

          <div className="breadcrumb">
            <span>RMS</span>
            <span>›</span>
            <span>Loan</span>
            <span>›</span>
            <b>Add New Loan</b>
          </div>
        </div>

        <div className="buttons">
          <button
            className={`draftBtn ${isSaved ? "cancelBtn" : ""}`}
            onClick={isSaved ? handleCancel : handleSaveDraft}
          >
            {isSaved ? "Cancel" : "Save as Draft"}
          </button>

          <button
            className={`addBtn ${isSaved ? "savedAddBtn" : ""}`}
            onClick={handleAddLoan}
          >
            Add Loan
          </button>
        </div>
      </div>

      <div className="loanCard" ref={formRef}>
        <div className="formSection">
          <div className="sectionLabel">
            <h3>Customer Information</h3>
          </div>

          <div className="sectionFields">
            <div className="formGroup">
              <label>
                Customer Name <span>*</span>
              </label>

              <input
                name="customerName"
                type="text"
                placeholder="Enter Customer name"
                onInput={allowOnlyLetters}
              />
            </div>

            <div className="formGroup">
              <label>
                Email <span>*</span>
              </label>

              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="formGroup">
              <label>
                Phone Number <span>*</span>
              </label>

              <input
                name="phoneNumber"
                type="text"
                placeholder="+91 9876543210"
                onInput={allowOnlyPhone}
              />
            </div>
          </div>
        </div>

        <div className="formSection">
          <div className="sectionLabel">
            <h3>Loan Details</h3>
          </div>

          <div className="sectionFields">
            <div className="formGroup">
              <label>
                Loan Amount <span>*</span>
              </label>

              <input
                name="loanAmount"
                type="text"
                placeholder="480000"
                onInput={allowOnlyNumbers}
              />
            </div>

            <div className="formGroup">
              <label>
                Product Type <span>*</span>
              </label>

              <select name="productType">
                <option value="">Select Product Type</option>
                <option>Home Loan</option>
                <option>Personal Loan</option>
                <option>Business Loan</option>
              </select>
            </div>

            <div className="formGroup">
              <label>
                Bank <span>*</span>
              </label>

              <input name="bank" type="text" placeholder="HDFC Bank" />
            </div>

            <div className="formGroup">
              <label>
                Stage <span>*</span>
              </label>

              <select name="stage">
                <option value="">Select Stage</option>
                <option>Lead</option>
                <option>Processing</option>
                <option>Approved</option>
              </select>
            </div>

            <div className="formGroup">
              <label>
                Status <span>*</span>
              </label>

              <select name="status">
                <option value="">Select Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Closed</option>
                <option>Reconciled</option>
              </select>
            </div>

            <div className="formGroup">
              <label>
                Priority <span>*</span>
              </label>

              <select name="priority">
                <option value="">Select Priority</option>
                <option>Normal</option>
                <option>High</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="formSection">
          <div className="sectionLabel">
            <h3>Commission & Executive Details</h3>
          </div>

          <div className="sectionFields">
            <div className="formGroup">
              <label>
                Bank Commission % <span>*</span>
              </label>

              <input
                name="bankCommission"
                type="text"
                placeholder="0.75"
                onInput={allowOnlyNumbers}
              />
            </div>

            <div className="formGroup">
              <label>
                Referral Fee % <span>*</span>
              </label>

              <input
                name="referralFee"
                type="text"
                placeholder="0.50"
                onInput={allowOnlyNumbers}
              />
            </div>

            <div className="formGroup">
              <label>
                Credit Executive Details <span>*</span>
              </label>

              <input
                name="creditExecutive"
                type="text"
                placeholder="Amit Sharma"
                onInput={allowOnlyLetters}
              />
            </div>

            <div className="formGroup">
              <label>
                Bank Executive Name <span>*</span>
              </label>

              <input
                name="bankExecutive"
                type="text"
                placeholder="Priya Nair"
                onInput={allowOnlyLetters}
              />
            </div>
          </div>
        </div>

        <div className="formSection">
          <div className="sectionLabel">
            <h3>Broker Information</h3>
          </div>

          <div className="sectionFields">
            <div className="brokerBox">
              <div className="formGroup">
                <label>
                  Broker Name <span>*</span>
                </label>

                <input
                  name="brokerName"
                  type="text"
                  placeholder="Karthik Agencies"
                  onInput={allowOnlyLetters}
                />
              </div>

              <div className="formGroup">
                <label>
                  Broker Type <span>*</span>
                </label>

                <select name="brokerType">
                  <option value="">Select Broker Type</option>
                  <option>Aggregator</option>
                  <option>Connector</option>
                  <option>Sub-connector</option>
                  <option>Direct</option>
                  <option>Agent</option>
                  <option>Referral</option>
                </select>
              </div>

              <div className="formGroup">
                <label>
                  Broker Code <span>*</span>
                </label>

                <input
                  name="brokerCode"
                  type="text"
                  placeholder="CON-001"
                />
              </div>

              <div className="formGroup">
                <label>
                  Commission % <span>*</span>
                </label>

                <input
                  name="commission"
                  type="text"
                  placeholder="0.2750"
                  onInput={allowOnlyNumbers}
                />
              </div>
            </div>

            <button className="addAnotherBtn" type="button">
              ＋ Add another
            </button>
          </div>
        </div>

        <div className="formSection noBorder">
          <div className="sectionLabel">
            <h3>Additional Information</h3>
          </div>

          <div className="sectionFields">
            <div className="formGroup fullWidth">
              <label>
                Notes <span>*</span>
              </label>

              <textarea
                name="notes"
                placeholder="Add any additional notes or comments"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddLoan;

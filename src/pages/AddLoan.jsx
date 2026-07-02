import { useRef, useState } from "react";
import "../styles/AddLoan.css";

function AddLoan({ onAddLoanToDisbursement }) {
  const formRef = useRef(null);
  const [isSaved, setIsSaved] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
    redirectData: null,
  });

  const showPopup = (type, title, message, redirectData = null) => {
    setPopup({
      show: true,
      type,
      title,
      message,
      redirectData,
    });
  };

  const closePopup = () => {
    const redirectData = popup.redirectData;

    setPopup({
      show: false,
      type: "success",
      title: "",
      message: "",
      redirectData: null,
    });

    if (redirectData && onAddLoanToDisbursement) {
      onAddLoanToDisbursement(redirectData);
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

    const customerName = formRef.current.querySelector('[name="customerName"]');
    const email = formRef.current.querySelector('[name="email"]');
    const phoneNumber = formRef.current.querySelector('[name="phoneNumber"]');
    const loanAmount = formRef.current.querySelector('[name="loanAmount"]');
    const bankCommission = formRef.current.querySelector(
      '[name="bankCommission"]'
    );
    const referralFee = formRef.current.querySelector('[name="referralFee"]');
    const creditExecutive = formRef.current.querySelector(
      '[name="creditExecutive"]'
    );
    const bankExecutive = formRef.current.querySelector(
      '[name="bankExecutive"]'
    );
    const brokerName = formRef.current.querySelector('[name="brokerName"]');
    const commission = formRef.current.querySelector('[name="commission"]');

    if (/\d/.test(customerName.value)) {
      showPopup(
        "error",
        "Invalid Name",
        "Customer name should not contain numbers."
      );
      customerName.focus();
      return false;
    }

    if (!isGmail(email.value)) {
      showPopup(
        "error",
        "Invalid Email",
        "Email must be valid and end with @gmail.com."
      );
      email.focus();
      return false;
    }

    if (/[A-Za-z]/.test(phoneNumber.value)) {
      showPopup(
        "error",
        "Invalid Phone Number",
        "Phone number should contain only numbers."
      );
      phoneNumber.focus();
      return false;
    }

    if (/[A-Za-z]/.test(loanAmount.value)) {
      showPopup(
        "error",
        "Invalid Loan Amount",
        "Loan amount should contain only numbers."
      );
      loanAmount.focus();
      return false;
    }

    if (/[A-Za-z]/.test(bankCommission.value)) {
      showPopup(
        "error",
        "Invalid Commission",
        "Bank commission should contain only numbers."
      );
      bankCommission.focus();
      return false;
    }

    if (/[A-Za-z]/.test(referralFee.value)) {
      showPopup(
        "error",
        "Invalid Referral Fee",
        "Referral fee should contain only numbers."
      );
      referralFee.focus();
      return false;
    }

    if (/\d/.test(creditExecutive.value)) {
      showPopup(
        "error",
        "Invalid Executive Name",
        "Credit executive name should not contain numbers."
      );
      creditExecutive.focus();
      return false;
    }

    if (/\d/.test(bankExecutive.value)) {
      showPopup(
        "error",
        "Invalid Executive Name",
        "Bank executive name should not contain numbers."
      );
      bankExecutive.focus();
      return false;
    }

    if (/\d/.test(brokerName.value)) {
      showPopup(
        "error",
        "Invalid Broker Name",
        "Broker name should not contain numbers."
      );
      brokerName.focus();
      return false;
    }

    if (/[A-Za-z]/.test(commission.value)) {
      showPopup(
        "error",
        "Invalid Commission",
        "Commission should contain only numbers."
      );
      commission.focus();
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
      "Loan added successfully. Click OK to view it in Disbursement.",
      data
    );
  };

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
              <label>Email</label>

              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="formGroup">
              <label>Phone Number</label>

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
              </select>
            </div>

            <div className="formGroup">
              <label>Priority</label>

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
                placeholder="0.5500"
                onInput={allowOnlyNumbers}
              />
            </div>

            <div className="formGroup">
              <label>
                Referral Fee <span>*</span>
              </label>

              <input
                name="referralFee"
                type="text"
                placeholder="0.5500"
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
                placeholder="Amit Sharma"
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
                  placeholder="Enter Broker Name"
                  onInput={allowOnlyLetters}
                />
              </div>

              <div className="formGroup">
                <label>
                  Broker Type <span>*</span>
                </label>

                <select name="brokerType">
                  <option value="">Select Broker Type</option>
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
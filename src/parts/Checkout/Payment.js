import React from "react";

import { InputText, InputFile } from "elements/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        {/* Column Left  */}
        <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
          <p className="mb-4">Transfer Pembayaran</p>
          <p>Tax: {tax}%</p>
          <p>Sub total: ${subTotal}</p>
          <p>Total: ${grandTotal}</p>

          {/* Bank BCA */}
          <div className="row mt-4">
            <div className="col-3 text-right">
              <img src={logoBca} alt="bank central asia" width="60" />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>2208 1996</dd>
                <dd>BuildWith Angga</dd>
              </dl>
            </div>
          </div>

          {/* Bank Mandiri */}
          <div className="row mt-4">
            <div className="col-3 text-right">
              <img src={logoMandiri} alt="bank mandiri" width="60" />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Mandiri</dd>
                <dd>2208 1996</dd>
                <dd>BuildWith Angga</dd>
              </dl>
            </div>
          </div>
        </div>

        {/* Column Right */}
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          {/* Input file - proof payment */}
          <label htmlFor="proofPayment">Upload Bukti Transfer</label>
          <InputFile
            accept="image/*"
            id="proofPayment"
            name="proofPayment"
            value={data.proofPayment}
            onChange={props.onChange}
          />

          {/* Input text - bank name */}
          <label htmlFor="bankName">Upload Bukti Transfer</label>
          <InputText
            id="bankName"
            name="bankName"
            type="text"
            value={data.bankName}
            onChange={props.onChange}
          />

          {/* Input text - bankHolder*/}
          <label htmlFor="bankName">Nama Pengirim</label>
          <InputText
            id="bankHolder"
            name="bankHolder"
            type="text"
            value={data.bankHolder}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
}

function Address({ canRegister }) {
  return (
    <>
  <br /><br />
  <h3 className="table-text">Address</h3>
  <div className="field-row address-stack">
    <div className="field full-width">
      <input id="streetAddress" type="text" name="streetAddress" required />
      <label htmlFor="streetAddress">Street Address <span className="required-star">*</span></label>
    </div>
  </div>
  <div className="field-row address-stack">
    <div className="field full-width">
      <input id="streetAddress2" type="text" name="streetAddress2" />
      <label htmlFor="streetAddress2">Street Address Line 2</label>
    </div>
  </div>
  <div className="field-row address-stack city-state-row">
    <div className="field">
      <input id="city" type="text" name="city" required />
      <label htmlFor="city">City <span className="required-star">*</span></label>
    </div>
    <div className="field">
      <input id="stateProvince" type="text" name="stateProvince" required />
      <label htmlFor="stateProvince">State/Province <span className="required-star">*</span></label>
    </div>
  </div>
  <div className="field-row address-stack">
    <div className="field">
      <input id="postalCode" type="text" name="postalCode" required />
      <label htmlFor="postalCode">Postal Code <span className="required-star">*</span></label>
    </div>
  </div>
  <div className="checkbox-row">
    <label htmlFor="acceptTerms">
      <input id="acceptTerms" type="checkbox" name="acceptTerms" required />
      I agree to the <a id="termsLink" href="#" onClick={(event) => { event.preventDefault(); window.alert('Terms of service') }}>Terms of service</a> and <a id="privacyLink" href="#" onClick={(event) => { event.preventDefault(); window.alert('Privacy policy') }}>privacy policy</a><span className="required-star">*</span>
    </label>
  </div>
  <div className="button-row">
    <button id="registerButton" type="button" disabled={!canRegister} onClick={() => window.alert('Registration complete!')}>Register</button>
  </div>
  <p className="required-note">Fields marked with <span className="required-star">*</span> are required.</p>
    </>
  )
}

export default Address

import './App.css'

function App() {

  return (
    <>
      <main className="page-shell">
  <h1>College Admissions</h1><br />
  <table className="form-table">
    <tbody><tr>
        <td colSpan={3}>
          <h3 className="table-text">Name</h3>
          <div className="field-row">
            <div className="field">
              <input id="firstname" type="text" name="firstname" required />
              <label htmlFor="firstname">First Name <span className="required-star">*</span></label>
            </div>
            <div className="field">
              <input id="middleinitial" type="text" name="middleinitial" required />
              <label htmlFor="middleinitial">Middle Initial <span className="required-star">*</span></label>
            </div>
            <div className="field">
              <input id="surname" type="text" name="surname" required />
              <label htmlFor="surname">Surname <span className="required-star">*</span></label>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          <h3 className="table-text">Date of Birth</h3>
          <div className="field-row dob-row">
            <div className="field">
              <select id="dobMonth" name="dobMonth" required>
                <option value>Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <label htmlFor="dobMonth">Month <span className="required-star">*</span></label>
            </div>
            <div className="field">
              <select id="dobDay" name="dobDay" required>
                <option value>Select Day</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}>25</option>
                <option value={26}>26</option>
                <option value={27}>27</option>
                <option value={28}>28</option>
                <option value={29}>29</option>
                <option value={30}>30</option>
                <option value={31}>31</option>
              </select>
              <label htmlFor="dobDay">Day <span className="required-star">*</span></label>
            </div>
            <div className="field">
              <select id="dobYear" name="dobYear" required>
                <option value>Select Year</option>
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
              </select>
              <label htmlFor="dobYear">Year <span className="required-star">*</span></label>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <h3 className="table-text">Gender</h3>
          <div className="gender-combo">
            <div className="radio-group">
              <label><input type="radio" id="male" name="Gender" defaultValue="male" required /> Male</label>
              <label><input type="radio" id="female" name="Gender" defaultValue="female" required /> Female</label>
              <label><input type="radio" id="other" name="Gender" defaultValue="other" required /> Other</label>
            </div>
            <div id="genderOtherField" className="field gender-other-field">
              <input id="genderOther" type="text" name="genderOther" />
              <label htmlFor="genderOther">Specify Gender <span className="required-star">*</span></label>
            </div>
          </div>
        </td>
        <td>
          <h3 className="table-text">Of Which Country are You a Citizen? <span className="required-star">*</span></h3>
          <select id="country" name="country" required>
            <option value>Select Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote d'Ivoire">Cote d'Ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Eswatini">Eswatini</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Greece">Greece</option>
            <option value="Grenada">Grenada</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Honduras">Honduras</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Kosovo">Kosovo</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia">Micronesia</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="North Korea">North Korea</option>
            <option value="North Macedonia">North Macedonia</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestine">Palestine</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Qatar">Qatar</option>
            <option value="Republic of the Congo">Republic of the Congo</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="South Sudan">South Sudan</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City">Vatican City</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <div className="field">
            <input id="email" type="email" name="email" required />
            <label htmlFor="email">Email <span className="required-star">*</span></label>
          </div>
        </td>
        <td>
          <div className="field phone-field">
            <div className="phone-input-row">
              <select id="phoneCountryPrefix" name="phoneCountryPrefix">
                <option value={+1}>+1 (United States)</option>
                <option value={+1}>+1 (Canada)</option>
                <option value={+7}>+7 (Russia)</option>
                <option value={+20}>+20 (Egypt)</option>
                <option value={+27}>+27 (South Africa)</option>
                <option value={+30}>+30 (Greece)</option>
                <option value={+31}>+31 (Netherlands)</option>
                <option value={+32}>+32 (Belgium)</option>
                <option value={+33}>+33 (France)</option>
                <option value={+34}>+34 (Spain)</option>
                <option value={+36}>+36 (Hungary)</option>
                <option value={+39}>+39 (Italy)</option>
                <option value={+41}>+41 (Switzerland)</option>
                <option value={+43}>+43 (Austria)</option>
                <option value={+44}>+44 (United Kingdom)</option>
                <option value={+45}>+45 (Denmark)</option>
                <option value={+46}>+46 (Sweden)</option>
                <option value={+47}>+47 (Norway)</option>
                <option value={+48}>+48 (Poland)</option>
                <option value={+49}>+49 (Germany)</option>
                <option value={+51}>+51 (Peru)</option>
                <option value={+52}>+52 (Mexico)</option>
                <option value={+53}>+53 (Cuba)</option>
                <option value={+54}>+54 (Argentina)</option>
                <option value={+55}>+55 (Brazil)</option>
                <option value={+56}>+56 (Chile)</option>
                <option value={+57}>+57 (Colombia)</option>
                <option value={+58}>+58 (Venezuela)</option>
                <option value={+60}>+60 (Malaysia)</option>
                <option value={+61}>+61 (Australia)</option>
                <option value={+62}>+62 (Indonesia)</option>
                <option value={+63}>+63 (Philippines)</option>
                <option value={+64}>+64 (New Zealand)</option>
                <option value={+65}>+65 (Singapore)</option>
                <option value={+66}>+66 (Thailand)</option>
                <option value={+81}>+81 (Japan)</option>
                <option value={+82}>+82 (South Korea)</option>
                <option value={+84}>+84 (Vietnam)</option>
                <option value={+86}>+86 (China)</option>
                <option value={+90}>+90 (Turkey)</option>
                <option value={+91}>+91 (India)</option>
                <option value={+92}>+92 (Pakistan)</option>
                <option value={+94}>+94 (Sri Lanka)</option>
                <option value={+95}>+95 (Myanmar)</option>
                <option value={+98}>+98 (Iran)</option>
                <option value={+211}>+211 (South Sudan)</option>
                <option value={+212}>+212 (Morocco)</option>
                <option value={+213}>+213 (Algeria)</option>
                <option value={+216}>+216 (Tunisia)</option>
                <option value={+218}>+218 (Libya)</option>
                <option value={+220}>+220 (Gambia)</option>
                <option value={+221}>+221 (Senegal)</option>
                <option value={+223}>+223 (Mali)</option>
                <option value={+225}>+225 (Cote d'Ivoire)</option>
                <option value={+234}>+234 (Nigeria)</option>
                <option value={+250}>+250 (Rwanda)</option>
                <option value={+254}>+254 (Kenya)</option>
                <option value={+255}>+255 (Tanzania)</option>
                <option value={+256}>+256 (Uganda)</option>
                <option value={+260}>+260 (Zambia)</option>
                <option value={+263}>+263 (Zimbabwe)</option>
                <option value={+264}>+264 (Namibia)</option>
                <option value={+265}>+265 (Malawi)</option>
                <option value={+266}>+266 (Lesotho)</option>
                <option value={+267}>+267 (Botswana)</option>
                <option value={+268}>+268 (Swaziland)</option>
                <option value={+351}>+351 (Portugal)</option>
                <option value={+352}>+352 (Luxembourg)</option>
                <option value={+353}>+353 (Ireland)</option>
                <option value={+354}>+354 (Iceland)</option>
                <option value={+355}>+355 (Albania)</option>
                <option value={+356}>+356 (Malta)</option>
                <option value={+358}>+358 (Finland)</option>
                <option value={+370}>+370 (Lithuania)</option>
                <option value={+371}>+371 (Latvia)</option>
                <option value={+372}>+372 (Estonia)</option>
                <option value={+373}>+373 (Moldova)</option>
                <option value={+375}>+375 (Belarus)</option>
                <option value={+381}>+381 (Serbia)</option>
                <option value={+382}>+382 (Montenegro)</option>
                <option value={+385}>+385 (Croatia)</option>
                <option value={+386}>+386 (Slovenia)</option>
                <option value={+420}>+420 (Czech Republic)</option>
                <option value={+421}>+421 (Slovakia)</option>
                <option value={+500}>+500 (Falkland Islands)</option>
                <option value={+595}>+595 (Paraguay)</option>
                <option value={+598}>+598 (Uruguay)</option>
                <option value={+850}>+850 (North Korea)</option>
                <option value={+852}>+852 (Hong Kong)</option>
                <option value={+853}>+853 (Macau)</option>
                <option value={+855}>+855 (Cambodia)</option>
                <option value={+856}>+856 (Laos)</option>
                <option value={+880}>+880 (Bangladesh)</option>
                <option value={+886}>+886 (Taiwan)</option>
                <option value={+961}>+961 (Lebanon)</option>
                <option value={+962}>+962 (Jordan)</option>
                <option value={+963}>+963 (Syria)</option>
                <option value={+964}>+964 (Iraq)</option>
                <option value={+965}>+965 (Kuwait)</option>
                <option value={+966}>+966 (Saudi Arabia)</option>
                <option value={+971}>+971 (United Arab Emirates)</option>
                <option value={+972}>+972 (Israel)</option>
                <option value={+973}>+973 (Bahrain)</option>
                <option value={+974}>+974 (Qatar)</option>
                <option value={+975}>+975 (Bhutan)</option>
                <option value={+976}>+976 (Mongolia)</option>
                <option value={+977}>+977 (Nepal)</option>
                <option value={+992}>+992 (Tajikistan)</option>
                <option value={+993}>+993 (Turkmenistan)</option>
                <option value={+994}>+994 (Azerbaijan)</option>
                <option value={+995}>+995 (Georgia)</option>
                <option value={+996}>+996 (Kyrgyzstan)</option>
                <option value={+998}>+998 (Uzbekistan)</option>
              </select>
              <input id="phone" type="tel" name="phone" required />
            </div>
            <label htmlFor="phone">Phone <span className="required-star">*</span></label>
          </div>
        </td>
      </tr>
    </tbody></table>
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
      I agree to the <a id="termsLink" href="javascript:void(0)">Terms of service</a> and <a id="privacyLink" href="javascript:void(0)">privacy policy</a><span className="required-star">*</span>
    </label>
  </div>
  <div className="button-row">
    <button id="registerButton" type="button" disabled>Register</button>
  </div>
  <p className="required-note">Fields marked with <span className="required-star">*</span> are required.</p>
    </main>
  </>
  )
}

export default App

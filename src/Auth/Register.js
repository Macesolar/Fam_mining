import React, { useRef, useState } from 'react'
import img from '../Img/logo3.png'
import './reg.css'
import { useAuth } from './Context/AuthContext'
import { useHistory } from 'react-router-dom'


function Register() {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const dobRef = useRef()
    const adressRef = useRef()
    const stateRef = useRef()
    const countryRef = useRef()
    //const zipRef = useRef()
    const genderRef = useRef()
    const phoneRef = useRef()
    const occupationRef = useRef()
    const securityRef = useRef()
    const answerRef = useRef()
    const purposeRef = useRef()
    //const contactRef = useRef()

    
    const { createProfile } = useAuth()
    const [error, setError] = useState('')
    const [Loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        setTimeout(() => {
            setError('')
            
          }, 5000);

        try{
            setError('')
            setLoading(true)
            await createProfile( firstNameRef.current.value, lastNameRef.current.value, dobRef.current.value, adressRef.current.value, stateRef.current.value, 
                countryRef.current.value, genderRef.current.value, phoneRef.current.value, occupationRef.current.value, securityRef.current.value, answerRef.current.value, purposeRef.current.value )
            history.push("/profile")
        } catch {
            setError('Failed to Register')
        }

        setLoading(false)
    }


    return(
        <div className='register'>
            <div id="myForm" class="form-popup">
                <div class="log-in1">
                    <img src={img} alt="logo" width="40%"/>
                    <h1 className="h1">Account Registration</h1>
                    <div class="log-elements">
                    <div className="text-danger">{error}</div>
                        <form class="form-container" onSubmit={handleSubmit}>
                        <div class="name">
                            <div class="first-name">
                                <label for="fname">First Name</label>
                                <div class="name">
                                <input
                                    class="form-control me-2"
                                    type="text"
                                    placeholder="First Name"
                                    aria-label="your name"
                                    ref={firstNameRef}
                                    required
                                />
                                </div>
                            </div>

                            <div class="last-name">
                                <label for="fname">Last Name</label>
                                <div class="name">
                                <input
                                    class="form-control me-2"
                                    type="text"
                                    placeholder="Last Name"
                                    aria-label="your name"
                                    ref={lastNameRef}
                                    required
                                />
                                </div>
                            </div>
                            </div>

                            <div class="password3">
                        <label for="DOB">Date of Birth</label>

                        <input
                            class="form-control me-2"
                            type="date"
                            placeholder="Date of Birth"
                            aria-label="Date of Birth"
                            name="DOB"
                            // min="1920-01-01"
                            // max="2005-05-31"
                            ref={dobRef}
                            required
                        />
                        </div>

                        
                        <div class="gender">
                        <label for="gender">Gender:</label>
                        <div >
                        <select
                                            data-toggle="select2"
                                            title="Withdraw option"
                                            data-select2-id="select2-data-1-6upb"
                                            tabindex="-1"
                                            class="gender1"
                                            aria-hidden="true"
                                            ref={genderRef}
                                        >
                                            <option value= '' > Gender</option>
                                            <option value= "Male"  >Male</option>
                                            <option value= "Female" >Female</option>

                                        </select>
                            
                        </div>
                        </div>

                            <div class="address">
                            <div class="first-name">
                                <label for="fname">Address</label>
                                <div class="name">
                                <input
                                    class="form-control me-2"
                                    type="text"
                                    placeholder="Address"
                                    aria-label="your name"
                                    ref={adressRef}
                                    required
                                />
                                </div>
                            </div>

                            <div class="last-name">
                                <label for="fname">State</label>
                                <div class="name">
                                <input
                                    class="form-control me-2"
                                    type="text"
                                    placeholder="State"
                                    aria-label="your name"
                                    ref={stateRef}
                                    required
                                />
                                </div>
                            </div>
                            </div>

                            <div class="country">
                            <div class="first-name">
                                <label for="country">Country</label>
                                <div class="name">
                                <select
                                    id="country"
                                    name="country"
                                    class="form-control me-2"
                                    type="text"
                                    placeholder="Country"
                                    aria-label="your name"
                                    ref={countryRef}
                                    required
                                >
                                    <option value="">select country</option>
                                    <option value="Afganistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
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
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bonaire">Bonaire</option>
                                    <option value="Bosnia & Herzegovina">
                                    Bosnia & Herzegovina
                                    </option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Ter">
                                    British Indian Ocean Ter
                                    </option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Canary Islands">Canary Islands</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">
                                    Central African Republic
                                    </option>
                                    <option value="Chad">Chad</option>
                                    <option value="Channel Islands">Channel Islands</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos Island">Cocos Island</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote DIvoire">Cote DIvoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaco">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">
                                    Dominican Republic
                                    </option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Ter">
                                    French Southern Ter
                                    </option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Great Britain">Great Britain</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="India">India</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea North">Korea North</option>
                                    <option value="Korea Sout">Korea South</option>
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
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Midway Islands">Midway Islands</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Nambia">Nambia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherland Antilles">
                                    Netherland Antilles
                                    </option>
                                    <option value="Netherlands">
                                    Netherlands (Holland, Europe)
                                    </option>
                                    <option value="Nevis">Nevis</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau Island">Palau Island</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Phillipines">Philippines</option>
                                    <option value="Pitcairn Island">Pitcairn Island</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Republic of Montenegro">
                                    Republic of Montenegro
                                    </option>
                                    <option value="Republic of Serbia">
                                    Republic of Serbia
                                    </option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="St Barthelemy">St Barthelemy</option>
                                    <option value="St Eustatius">St Eustatius</option>
                                    <option value="St Helena">St Helena</option>
                                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                    <option value="St Lucia">St Lucia</option>
                                    <option value="St Maarten">St Maarten</option>
                                    <option value="St Pierre & Miquelon">
                                    St Pierre & Miquelon
                                    </option>
                                    <option value="St Vincent & Grenadines">
                                    St Vincent & Grenadines
                                    </option>
                                    <option value="Saipan">Saipan</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="Samoa American">Samoa American</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome & Principe">
                                    Sao Tome & Principe
                                    </option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Tahiti">Tahiti</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Erimates">
                                    United Arab Emirates
                                    </option>
                                    <option value="United States of America">
                                    United States of America
                                    </option>
                                    <option value="Uraguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City State">
                                    Vatican City State
                                    </option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands (Brit)">
                                    Virgin Islands (Brit)
                                    </option>
                                    <option value="Virgin Islands (USA)">
                                    Virgin Islands (USA)
                                    </option>
                                    <option value="Wake Island">Wake Island</option>
                                    <option value="Wallis & Futana Is">
                                    Wallis & Futana Is
                                    </option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zaire">Zaire</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                                </div>
                            </div>
                            
                            <div class="last-name">
                            {/* <label for="fname">Zip Code</label> */}
                            {/* <div class="name">
                            <input
                                class="form-control me-2"
                                type="text"
                                placeholder="Zip Code"
                                aria-label="your name"
                                ref={zipRef}
                                required
                            />
                            </div> */}
                        </div>
                        </div>


                        <div class="country">
                        <div class="first-name">
                            <label for="fname">Phone Number</label>
                            <div class="name">
                            <input
                                class="form-control me-2"
                                type="phone"
                                placeholder="Phone no."
                                aria-label="your name"
                                ref={phoneRef}
                                required
                            />
                            </div>
                        </div>

                        <div class="last-name">
                            <label for="occupation">Occupation</label>
                            <div class="name">
                            <select
                                name="occupation"
                                id="occupation"
                                class="form-control me-2"
                                type="text"
                                placeholder="Occupation"
                                aria-label="your name"
                                ref={occupationRef}
                                required
                            >
                                <option value="">Occupation</option>
                                <option value="Student">Student</option>
                                <option value="Employed">Employed</option>
                                <option value="Unemployed">Unemployed</option>
                                <option value="Self-Employed">Self-Employed</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div class="address">
                        <div class="first-name">
                            <label for="security">Security Question</label>
                            <div class="name">
                            <select
                                name="security"
                                id="security"
                                class="form-control me-2"
                                type="text"
                                placeholder="Security question"
                                aria-label="your name"
                                ref={securityRef}
                                required
                            >
                                <option value="">Security question</option>
                                <option value="What is the name if your first pet?">
                                What is the name if your first pet?
                                </option>
                                <option value="What is your mother's maiden name?">
                                What is your mother's maiden name?
                                </option>
                                <option value="What is your favourite color?">
                                What is your favourite color?
                                </option>
                            </select>
                            </div>
                        </div>
                        
                        <div class="last-name">
                            <label for="fname">Answer</label>
                            <div class="name">
                            <input
                                class="form-control me-2"
                                type="text"
                                placeholder="Answer"
                                aria-label="answer to security question"
                                ref={answerRef}
                                required
                            />
                            </div>
                        </div>
                        </div>
                        
                        

                        <div class="password4">
                        <label for="mining">Purpose for Fam Mining</label>
                        <select
                            name="mining"
                            id="mining"
                            class="form-control me-2"
                            type="text"
                            placeholder="Why Fam Mining?"
                            aria-label="Why Fami Mining?"
                            ref={purposeRef}
                            required
                        >
                            <option value="">Why Fam Mining?</option>
                            <option value="Investment">Investment</option>
                            <option value="Savings">Savings</option>
                            <option value="Extra Source of Income">
                            Extra Source of Income
                            </option>
                            <option value="For Fun">For Fun</option>
                        </select>
                        </div>

                        
                            

                            <button
                            class="reg-btn btn btn-outline-primary"
                            type="submit"
                            disabled={Loading}
                            >
                            Submit
                            </button>
                           

                            
                            


                        </form> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
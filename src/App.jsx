import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";
import Chevron from "./stories/Components/Chevron/Chevron";
import {
  COMPANY_NAMES,
  SUBSCRIPTIONS,
  COUNTRIES
} from "./dummydata";

const gridItemCN = cntl`
  grid 
  grid-cols-2 
  gap-x-8 
  gap-y-2
`;

const labelCN = cntl`
  mb-2 
  text-gray-200
`;


const STEPS = ["CLIENT INFO", "LOGO", "BRANDING", "APP STORE"];


const App = () => {
  const [companyName, setCompanyName] = useState({
    label: COMPANY_NAMES[0],
    value: COMPANY_NAMES[0]
  });
  const [espaceName, setEspaceName] = useState("");
  const [subscription, setSubscription] = useState({
    label: SUBSCRIPTIONS[0],
    value: SUBSCRIPTIONS[0]
  });
  const [primaryOwner, setPrimaryOwner] = useState("");
  const [primaryOwnerEmail, setPrimaryOwnerEmail] = useState("");
  const [primaryOwnerPhone, setPrimaryOwnerPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [suite, setSuite] = useState("");
  const [country, setCountry] = useState({ label: "United States", value: "United States" });
  const [postalCode, setPostalCode] = useState("");

  const [needInput, setNeedInput] = useState(true);

  useEffect(() => {
    // Check if form fields are valid
    setNeedInput(
      espaceName.trim().length === 0 || primaryOwner.trim().length === 0 || primaryOwnerEmail.trim().length === 0 || primaryOwnerPhone.trim().length === 0 || streetAddress.trim().length === 0 || city.trim().length === 0 || postalCode.trim().length === 0
    );
  }, [
    espaceName,
    primaryOwner,
    primaryOwnerEmail,
    primaryOwnerPhone,
    streetAddress,
    city,
    postalCode
  ]);

  const handleSave = () => {
    const result = {
      espaceName,
      companyName: companyName.value,
      subscription: subscription.value,
      owner: {
        name: primaryOwner,
        phone: primaryOwnerPhone,
        email: primaryOwnerEmail
      },
      location: {
        street: streetAddress,
        suite,
        city,
        country: country.value,
        postalCode
      }
    }
    console.log(JSON.stringify(result, null, 4));
  }

  return (
    <div>
      <NavBar />

      <div className="bg-black w-full min-h-screen flex">
        <div className="p-16 w-2/3">
          <div className="divide-y divide-gray-400">
            <div className="pb-8">
              <button type="button"
                className="flex mb-8 text-gray-200 hover:text-gray-50 items-center"
              >
                <Chevron className="w-2 transform rotate-180 ml-4" />
                <p className="ml-2">Back</p>
              </button>

              <p className="text-2xl">Add New Client</p>
              <div className="mt-4 mb-4">
                <ProgressTracker
                  steps={STEPS}
                />
              </div>

              <CollapsibleSection title="Overview" defaultOpen>
                <div className={gridItemCN}>
                  <div>
                    <p className={labelCN}>Company Name</p>
                    <Dropdown
                      options={COMPANY_NAMES.map((name) => ({
                        label: name,
                        value: name,
                      }))}
                      value={companyName}
                      onChange={(value) => setCompanyName(value)}
                    />
                  </div>

                  <div>
                    <Input
                      label="eSpace Name*"
                      placeholder=""
                      value={espaceName}
                      onChange={(value) => setEspaceName(value)}
                    />
                  </div>

                  <div>
                    <p className={labelCN}>Subscription*</p>
                    <Dropdown
                      options={SUBSCRIPTIONS.map((name) => ({
                        label: name,
                        value: name,
                      }))}
                      value={subscription}
                      onChange={(value) => setSubscription(value)}
                    />
                  </div>
                </div>
              </CollapsibleSection>
            </div>

            <div className="pt-8 pb-8">
              <CollapsibleSection title="Owner Information" defaultOpen>
                <div className={gridItemCN}>
                  <div>
                    <Input
                      label="Primary Owner*"
                      placeholder=""
                      value={primaryOwner}
                      onChange={(value) => setPrimaryOwner(value)}
                    />
                  </div>
                  <div>
                    <Input
                      label="Primary Owner Email*"
                      placeholder=""
                      value={primaryOwnerEmail}
                      onChange={(value) => setPrimaryOwnerEmail(value)}
                    />
                  </div>
                  <div>
                    <Input
                      label="Primary Owner Phone*"
                      placeholder=""
                      value={primaryOwnerPhone}
                      onChange={(value) => setPrimaryOwnerPhone(value)}
                    />
                  </div>
                </div>
              </CollapsibleSection>
            </div>

            <div className="pt-8 pb-8">
              <CollapsibleSection title="Location Information" defaultOpen>
                <div className={gridItemCN}>
                  <div>
                    <Input
                      label="Street Address*"
                      placeholder=""
                      value={streetAddress}
                      onChange={(value) => setStreetAddress(value)}
                    />
                  </div>
                  <div>
                    <Input
                      label="City*"
                      placeholder=""
                      value={city}
                      onChange={(value) => setCity(value)}
                    />
                  </div>
                  <div>
                    <Input
                      label="Suite/Unit"
                      placeholder=""
                      value={suite}
                      onChange={(value) => setSuite(value)}
                    />
                  </div>
                  <div>
                    <p className={labelCN}>Country</p>
                    <Dropdown
                      options={COUNTRIES.map((name) => ({
                        label: name,
                        value: name,
                      }))}
                      value={country}
                      onChange={(value) => setCountry(value)}
                    />
                  </div>
                  <div>
                    <Input
                      label="Postal Code*"
                      placeholder=""
                      value={postalCode}
                      onChange={(value) => setPostalCode(value)}
                    />
                  </div>
                </div>
              </CollapsibleSection>

              <div className="mt-24">
                <Button
                  title="Save"
                  disabled={needInput}
                  onClick={handleSave}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

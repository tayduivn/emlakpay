import React from "react";
import Select from "react-select";

const LocationSelector = () => {
  return (
    <div>
      <div className="form-group">
        <Select
          options={[
            { value: "Ankara", label: "Ankara" },
            { value: "İstanbul", label: "İstanbul" },
            { value: "İzmir", label: "İzmir" }
          ]}
          placeholder="İl"
        />
      </div>
      <div className="form-group">
        <Select
          options={[
            { value: "Ankara", label: "Ankara" },
            { value: "İstanbul", label: "İstanbul" },
            { value: "İzmir", label: "İzmir" }
          ]}
          placeholder="İlçe"
        />
      </div>
      <div className="form-group">
        <Select
          options={[
            { value: "Ankara", label: "Ankara" },
            { value: "İstanbul", label: "İstanbul" },
            { value: "İzmir", label: "İzmir" }
          ]}
          placeholder="Mahalle"
        />
      </div>
    </div>
  );
};

export default LocationSelector;

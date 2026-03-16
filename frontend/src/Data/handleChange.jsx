  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      const array = e.target.checked
        ? [...pre[e.target.name], e.target.value]
        : pre[e.target.name].filter((item) => item !== e.target.value);
      const nextData = {
        ...pre,
        [e.target.name]: array,
      };
      {
        setpersonalInfo(nextData);
        resumeData.setData((prev) => {
          return {
            ...prev,
            ...nextData,
          };
        });
      }
    } else {
      const nextData = {
        ...pre,
        [e.target.name]: e.target.value,
      };
      setpersonalInfo(nextData);
      resumeData.setData((prev) => {
        return {
          ...prev,
          ...nextData,
        };
      });
    }

    // setpersonalInfo((pre) => {
    //   if (e.target.type === "checkbox") {
    //     const array = e.target.checked
    //       ? [...pre[e.target.name], e.target.value]
    //       : pre[e.target.name].filter((item) => item !== e.target.value);
    //     const nextData = {
    //       ...pre,
    //       [e.target.name]: array,
    //     };
    //     resumeData.setData((prev) => {
    //       return {
    //         ...prev,
    //         ...nextData,
    //       };
    //     });
    //     return nextData;
    //   } else {
    //     const nextData = {
    //       ...pre,
    //       [e.target.name]: e.target.value,
    //     };
    //     resumeData.setData((prev) => {
    //       return {
    //         ...prev,
    //         ...nextData,
    //       };
    //     });
    //     return nextData;
    //   }
    // });
  };
export const updateObject = <T, K extends keyof T>(oldObject: T, newProperty: { [key in K]: any }) => {
    return {
      ...oldObject,
      ...newProperty,
    };
  };

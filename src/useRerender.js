import React from "react";

const useRerender = () => {
  const owner =
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      .current;
  const name = owner.type.name ? `<${owner.type.name} />` : "";
  const props = owner.pendingProps;

  React.useEffect(() => {
    console.log(
      `Component ${name} rerender with ${JSON.stringify(props)} props`
    );
  }, [name, props]);
};

export default useRerender;

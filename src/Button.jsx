import React from "react";
import ButtonApi from "./ButtonApi";
import { Button, Stack, Wrap, WrapItem } from "@chakra-ui/react";

const Buttons = ({ match }) => {
  return (
    <>
      <div className="nav">
        <div className="navbar">
          {ButtonApi.map((item, index) => {
            return (
              <Stack direction="column">
                <Wrap spacing={4}>
                  <WrapItem>
                    <Button
                      className="btn-group_item"
                      key={index}
                      onClick={() => {
                        match(item.category);
                      }}
                      colorScheme="gray"
                    >
                      {item.name}
                    </Button>
                  </WrapItem>
                </Wrap>
              </Stack>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Buttons;

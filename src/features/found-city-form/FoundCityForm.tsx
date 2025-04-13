"use client";

import type { FC } from "react";
import { Form, Input, Button } from "antd";

type Props = {
  onSubmit: (values: { city: string }) => void;
};

export const FoundCityForm: FC<Props> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: { city: string }) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={handleFinish}
      className="d-flex justify-content-center gap-3 mt-4"
    >
      <Form.Item
        name="city"
        rules={[{ required: true, message: "Please enter a city name" }]}
      >
        <Input placeholder="Enter city" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

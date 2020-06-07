import React, { Component } from 'react';
import { Button, Radio, Form, Input, Select, DatePicker, TimePicker, Switch, Checkbox } from 'antd';
import moment from 'moment'

const { Option } = Select
const { TextArea } = Input
const format = 'HH:mm';

class EventForm extends Component {
  state = {

  }


  render() {
    return (
      <>
        <Form 
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item>
            <Select
              name="event"
              showSearch
              style={{ width: 200 }}
              placeholder="Select an event"
              optionFilterProp="children"
              // onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              >
              <Option value="lastwish">Last Wish</Option>
              <Option value="gos">Garden of Salvation</Option>
              <Option value="scourge">Scourge of the Past</Option>
              <Option value="nf">Nightfall</Option>
            </Select>
          </Form.Item>
          
          <Form.Item>
            <DatePicker  />
          </Form.Item>
          
          <Form.Item>
            <TimePicker
              defaultValue={moment('12:00', format)}
              format={format}
              />
          </Form.Item>
          
          <Form.Item>
            <Checkbox>Need Helper</Checkbox>
          </Form.Item>
          
          <Form.Item>

          <TextArea
            // value={value}
            // onChange={this.onChange}
            placeholder="Notes for event"
            autoSize={{ minRows: 1, maxRows: 5 }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">Create Event</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default EventForm;

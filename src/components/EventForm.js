import React, { Component } from 'react';
import { Button, Form, Input, Select, DatePicker, TimePicker, Checkbox } from 'antd';

const { Option } = Select
const { TextArea } = Input
const format = 'HH:mm';

class EventForm extends Component {
  state = {
    event: '',
    date: '',
    time: '',
    helper: false,
    description: '',
  }

  onFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onDateChange = (date,dateString) => {
    // function(date: moment, dateString: string)
    // console.log(date, dateString)
    this.setState({ date: dateString })

  }
  onTimeChange = (time, timeString) => {
    // function(date: moment, dateString: string)
    this.setState({ time: timeString })
    
  }

  onEventChange = (value) => {
    this.setState({ event: value })
  }

  onCheckedChange = (e) => {
    this.setState({ helper: e.target.checked })
  }

  resetForm = () => {
    // this.setState({ 
    //   event: '',
    //   date: '',
    //   time: '',
    //   helper: false,
    //   description: ''
    // })
    alert('hi buddy')
    // this.props.form.resetFields('Metric');
  }


  render() {
    return (
      <>
        <Form 
          name="newEvent"
          layout="inline"
          onSubmit={this.resetForm}
          // onFinish={(e) => this.props.addNewEvent(this.state)}
          onFinish={(e) => this.props.addNewEvent(this.state)}
        >
            
          <Form.Item>
            <Select
              name="event"
              showSearch
              style={{ width: 200 }}
              placeholder="Select an event"
              optionFilterProp="children"
              // onChange={this.onEventChange}
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
            <DatePicker  
              name="date"
              // onChange={this.onDateChange}
              // value={this.state.date}
              />
          </Form.Item>
          
          <Form.Item>
            <TimePicker
              name="time"
              minuteStep={15}
              format={format}
              // onChange={this.onTimeChange}
              // value={this.state.time}
              />
          </Form.Item>
          
          <Form.Item>
            <Checkbox
             name="helper"
            //  checked={this.state.helper}
            //  onChange={this.onCheckedChange}
             >
              Need Helper</Checkbox>
          </Form.Item>
          
          <Form.Item>

          <TextArea
            // value={this.state.description}
            name="description"
            // onChange={this.onFormChange}
            placeholder="Notes for event"
            autoSize={{ minRows: 1, maxRows: 5 }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" >Create Event</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default EventForm;

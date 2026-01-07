package com.example.demo.di;

public class HelloBeanmpl implements HelloBean {
    String msg = null;// 절대로 개발자가 직접 생성하지 않음
    public void  setMsg(String msg){
        this.msg = msg; // paramter msg가 아닌, 전역변수 msg임.
    }

    @Override
    public String getGreeting(String msg) {
        return "Spring"+this.msg;
    }
}

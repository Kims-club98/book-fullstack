package com.example.demo.di;

public class A {
    public static void main(String[] args) {
        B b = null;//선언만 되어 있다. - 스프링에서는 이것을 대신 해줌
        //스프링을 활용하면 필요할 때 자동으로 객체를 주입해줌.
        if(b==null){
            //개발자가 아래와 같이 직접 객체 생성하지 않음.
            //관리책임이 개발자에게 있음(생명주기관리)
            //객체를 사용하려는 측은 누구인가? A
            //A클래스는 선언부와 생성부를 모두 신경써야 함.
            //둘 다 수정하는게 나쁘다 보다는 일단 수정해야 하는 부분이 늘어난다.-문제제기
            //수정할 코드를 최대한 줄여주자.
            b = new B();
        }
        b.methodB();
    }
}

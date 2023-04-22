

 class Node 
{  
    int data;  
    Node next;  
    Node(int x)  
    {  
        data = x;  
        next = null;  
    }  


static Node deleteEven(Node head){
//Enter your code here
    Node temp = head;
    Node next;
    do{
            if(temp.data % 2 == 0){
               deleteNode(head,temp);
            }
            next=temp.next;
            temp=next;
    }while(temp!=head);
    return head;
}
static Node deleteNode(Node headRef, Node del){
    Node temp = headRef;
    if(headRef==del){
        headRef=del.next;
    }
    while(temp.next!=del){
        temp=temp.next;
    }
    temp.next=del.next;
    return headRef;
}
}
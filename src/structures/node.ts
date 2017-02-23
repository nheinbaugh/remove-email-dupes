/**
 * Created by nickh on 2/22/2017.
 */

export class Node {
  public Value: string;
  public RightChild: Node;
  public LeftChild: Node;

  constructor(input: string) {
    this.Value = input;
  }

  public append(input: string): void {
    if (input < this.Value) {
      if (!this.LeftChild) {
        this.LeftChild = new Node(input);
      } else {
        this.LeftChild.append(input);
      }
    } else if (input > this.Value) {
      if (!this.RightChild) {
        this.RightChild = new Node(input);
      } else {
        this.RightChild.append(input);
      }

    }
  }

  public search(input: string): boolean {
    // if we match then return true
    if (input === this.Value) {
      return true;
    } else if (input < this.Value) {
      // if the value is less and there is no child node then we return false
      if (!this.LeftChild) {
        return false;
      }
      return this.LeftChild.search(input);
    } else {
      // if the value is more and there is no child node in place then return false
      if (!this.RightChild) {
        return false;
      }
      return this.RightChild.search(input);
    }
  }
}

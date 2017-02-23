import {Node} from './node';
/**
 * Created by nickh on 2/22/2017.
 */

describe('Node:Class', () => {

  it('should assign the value in the ctor to the "Value" property', () => {
    let input = 'test input';
    let test = new Node(input);
    expect(test.Value).toEqual(input);
  });

  it('should have no children by default', () => {
    let input = 'test input';
    let test = new Node(input);
    expect(test.RightChild).toBeFalsy();
    expect(test.LeftChild).toBeFalsy();
  });

  describe('append:Method', () => {
    let node: Node;
    beforeEach(() => {
      let input = 'test';
      node = new Node(input);
    });

    it('should place a leser (alphabetically) value in the left child node', () => {
      let newChild = 'notTest';
      node.append(newChild);
      expect(node.LeftChild.Value).toEqual(newChild);
    });

    it('should place a greater value (alphabetically) in the right child node', () => {
      let newChild = 'wayGreatTest';
      node.append(newChild);
      expect(node.RightChild.Value).toEqual(newChild);
    });
  });

  describe('search:Method', () => {

    let test: Node;
    beforeEach(() => {
      test = new Node('test');
    });

    it('should return true if the input matches the value of the current node', () => {
        let result = test.search(test.Value);
        expect(result).toBeTruthy();
    });

    it('should return false if the value is less than the current value and there is no left child', () => {
        let result = test.search('lower');
        expect(result).toBeFalsy();
    });

    it('should return false if the value is greater than the current value and there is no right child', () => {
        let result = test.search('veryHigh');
        expect(result).toBeFalsy();
    });

    it('should return true if the value matches the left child', () => {
        let input = 'result';
        test.LeftChild = new Node(input);
        let result = test.search(input);
        expect(result).toBeTruthy();
    });

    it('should return false if the value matches the right child', () => {
      let input = 'veryHigh';
      test.RightChild = new Node(input);
      let result = test.search(input);
      expect(result).toBeTruthy();
    });

    it('should call the search method on the left child node if the value is less than the current value', () => {
      let input = 'result';
      test.LeftChild = new Node(input);
      spyOn(test.LeftChild, 'search').and.returnValue(true);
      let result = test.search(input);
      expect(result).toBeTruthy();
    });

    it('should call the search method on the right child node if the value is greater than the current value', () => {
      let input = 'veryHigh';
      test.RightChild = new Node(input);
      spyOn(test.RightChild, 'search').and.returnValue(true);
      let result = test.search(input);
      expect(result).toBeTruthy();
    });

  });
});

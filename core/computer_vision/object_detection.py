import cv2
import numpy as np

class ObjectDetector:
    def __init__(self, model_path, config_path):
        self.net = cv2.dnn.readNetFromDarknet(model_path, config_path)

    def detect_objects(self, image):
        # Pre-process the image
        blob = cv2.dnn.blobFromImage(image, 1/255, (416, 416), swapRB=True, crop=False)
        self.net.setInput(blob)

        # Run the detection algorithm
        outputs = self.net.forward(self.net.getUnconnectedOutLayersNames())

        # Process the detection results
        detections = []
        for output in outputs:
            for detection in output:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if confidence > 0.5 and class_id == 0:
                    # Draw bounding box and label
                    x, y, w, h = detection[0:4] * np.array([image.shape[1], image.shape[0], image.shape[1], image.shape[0]])
                    cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)
                    cv2.putText(image, f"Object {class_id}", (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                    detections.append((x, y, w, h, class_id))
        return detections

# Example usage
detector = ObjectDetector("yolov3.cfg", "yolov3.weights")
image = cv2.imread("image.jpg")
detections = detector.detect_objects(image)
print(f"Detected objects: {detections}")
